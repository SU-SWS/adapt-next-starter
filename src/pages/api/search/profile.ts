import { NextApiRequest, NextApiResponse } from 'next';
import connect from 'next-connect';
import { WithAuthUser } from 'adapt-auth-sdk';
import { CoveoClient } from '../../../services/coveo/coveo';
import { auth } from '../../../utils/authInstance';

/**
 * Basic endpoint to create Coveo search tokens with user analytics and affiliation based search permissions
 */
export const getUserProfileHandler = async (req: WithAuthUser<NextApiRequest>, res: NextApiResponse) => {
  const { user } = req;
  const { username } = req.body;

  console.log({ username });

  // TODO: Here is where we'd normally fetch user affiliations from MP
  // NOTE: We may need to also fetch contact information or email if since we don't actually have userName
  // being returned in the SAML payload

  try {
    const coveo = new CoveoClient({
      apiKey: process.env.COVEO_SEARCH_TOKEN_API_KEY,
      organizationId: process.env.NEXT_PUBLIC_COVEO_ORGANIZATION_ID,
      sourceId: process.env.COVEO_SOURCE_ID,
    });

    // NOTE: This application is currently not returning the IDCS username so we're hard coding it...
    // We also haven't integrated megaprofile affiliations, but we will eventually map affililations to groups
    const token = await coveo.createSearchToken('zguan', ['Alumni', 'Students']);

    // We need to first lookup the user to get the uniqueId... then we can load the actual user data?

    // TODO: We might need to create a new user security identity here prior to fetching

    return res.json({ token });
  } catch (searchTokenErr) {
    console.log('ERR:', searchTokenErr.response?.data);
    return res.status(500).json('Whoopsy-doodle...');
  }
};

const handler = connect<NextApiRequest, NextApiResponse>()
  .use(auth.authorize())
  .get(getUserProfileHandler);

export default handler;
