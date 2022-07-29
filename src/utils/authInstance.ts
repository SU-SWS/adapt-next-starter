import { AdaptAuth } from 'adapt-auth-sdk';

export const auth = new AdaptAuth({
  saml: {
    serviceProviderLoginUrl:
    process.env.ADAPT_AUTH_SAML_SP_URL || 'https://directory-sso-uat.stanford.edu/api/sso/login',
    entity: process.env.ADAPT_AUTH_SAML_ENTITY || 'directory-sso-uat',
    cert: process.env.ADAPT_AUTH_SAML_CERT || 'you-must-pass-cert',
    decryptionKey: process.env.ADAPT_AUTH_SAML_DECRYPTION_KEY,
    returnTo: process.env.ADAPT_AUTH_SAML_RETURN_URL,
    returnToOrigin: process.env.ADAPT_AUTH_SAML_RETURN_ORIGIN || '',
    returnToPath: process.env.ADAPT_AUTH_SAML_RETURN_PATH || '',
  },
  session: {
    secret: process.env.ADAPT_AUTH_SESSION_SECRET || '',
    name: process.env.ADAPT_AUTH_SESSION_NAME || 'directory-auth',
    expiresIn: process.env.ADAPT_AUTH_SESSION_EXPIRES_IN || '12h',
    logoutRedirectUrl: process.env.ADAPT_AUTH_SESSION_LOGOUT_URL || '/',
    loginRedirectUrl: process.env.ADAPT_AUTH_SESSION_LOGIN_URL,
    unauthorizedRedirectUrl: process.env.ADAPT_AUTH_SESSION_UNAUTHORIZED_URL,
  },
});
