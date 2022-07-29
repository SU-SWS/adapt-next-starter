import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { PushConstituentDTO } from '../services/coveo/types';
import { useSearchToken } from './useSearchToken';

const organizationId = process.env.NEXT_PUBLIC_COVEO_ORGANIZATION_ID;

/**
 * The idea behind this hook is to utilize the Coveo search API to fetch the raw document data,
 * which would be our privacy intersected user profile as JSON, directly from coveo. This hook
 * would be used directly on the `/profile/[...username].tsx` page component to fetch a users profile data
 * for display.
 */
export const useProfile = (username: string) => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<PushConstituentDTO>(null);
  const hasProfile = !!profile;
  const { token } = useSearchToken();

  const fetchConstituent = useCallback(async () => {
    setLoading(true);
    const result = await axios.post(
      'https://platform.cloud.coveo.com/rest/search/v2',
      {
        aq: `@username="${username}"`,
        fieldsToinclude: ['profile'],
      },
      {
        params: { organizationId },
        headers: { authorization: `Bearer ${token}` },
      }
    );
    const foundProfile = result.data.results?.[0];
    const profileData = JSON.parse(foundProfile?.raw?.profile) as PushConstituentDTO;

    setProfile(profileData);
    setLoading(false);
  }, [setLoading, token, username, setProfile]);

  useEffect(() => {
    if (!hasProfile && token) {
      fetchConstituent();
    }
  }, [hasProfile, fetchConstituent, token]);

  return { loading, profile };
};
