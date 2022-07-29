import React, { useEffect } from 'react';
import { urlencoded } from 'body-parser';
import { GetServerSideProps } from 'next';
import connect from 'next-connect';
import { useRouter } from 'next/router';
import { auth } from '../utils/authInstance';
import routes from '../routes';
import { LoadingOverlay } from '../components';

export interface AuthPageProps {
  redirectUrl?: string;
  error?: string;
}

export const getServerSideProps: GetServerSideProps<AuthPageProps> = async ({ req, res }) => {
  const authHandler = connect()
    .use(urlencoded({ extended: false }))
    .post(auth.authenticate());

  try {
    await authHandler.run(req, res);
  } catch (err) {
    return { props: { error: 'Authentication Error' } };
  }
  const finalDestination = auth.getFinalDestination(req);

  return {
    props: {
      redirectUrl: finalDestination || '/',
    },
  };
};

/**
 * This AuthPage exists solely as a page to handle storing the session cookie
 * and redirecting to our final destination. To keep things more secure we use
 * strict, http-only, secure cookies. Now that we're handling our unauthorized
 * redirects on the server we need to render a dummy route in the browser so
 * that our session cookies get attached correctly. Since adapt-sso-sp injects
 * an additional redirect between us and idcs on the SAML POST back we get an
 * external referer value the negates us being able to set our auth cookie
 * during the authentication redirect.
 */
const AuthPage = ({
  redirectUrl = '/',
  error,
}: AuthPageProps) => {
  const { replace } = useRouter();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (error) {
        replace(routes.authenticationFailed());
      } else {
        replace(redirectUrl);
      }
    }
  }, [redirectUrl, error, replace]);

  return (
    <LoadingOverlay label="Authenticating..." open />
  );
};

export default AuthPage;
