// Resolved Netlify app url
let appUrl = 'http://localhost:3000';

if (process.env.CONTEXT === 'production') {
  // Support for Production app builds.
  appUrl = process.env.URL;
} else if (process.env.CONTEXT !== 'production' && process.env.NETLIFY) {
  // Support for non-production netlify builds (branch/preview)
  appUrl = process.env.DEPLOY_PRIME_URL;
} else if (process.env.NETLIFY_DEV) {
  // Support for Netlify CLI.
  appUrl = 'http://localhost:64946';
}

/**
 * Next Configuration.
 */
module.exports = {
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    // Let's inline env vars for our lambdas, shan't we?
    config.plugins.push(
      new webpack.EnvironmentPlugin({
        // Adapt Auth Client
        ADAPT_AUTH_SAML_RETURN_ORIGIN: appUrl, // Default host to using resolved Netlify appUrl
        ADAPT_AUTH_SAML_RETURN_PATH: '',
        ADAPT_AUTH_SAML_SP_URL: '',
        ADAPT_AUTH_SESSION_SECRET: '',
        ADAPT_AUTH_SESSION_LOGIN_URL: '',
        ADAPT_AUTH_SESSION_NAME: '',
        ADAPT_AUTH_SAML_DECRYPTION_KEY: '',
        ADAPT_AUTH_SAML_CERT: '',
        SECRET: '',
        ADAPT_AUTH_SAML_ENTITY: '',
      })
    );

    return config;
  },
  images: {
    domains: ['placedog.net'],
  },
};
