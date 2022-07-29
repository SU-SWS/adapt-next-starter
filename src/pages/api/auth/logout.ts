import { NextApiHandler } from 'next';
import routes, { LogoutReason } from '../../../routes';
import { auth } from '../../../utils/authInstance';

const logoutHandler: NextApiHandler = (req, res) => {
  const logoutReason = req.query.reason as LogoutReason;
  let redirectUrl: string;

  // Handle Custom redirect depending on logout reason
  switch (logoutReason) {
    case 'auth_error':
      redirectUrl = routes.authenticationFailed();
      break;
    case 'auth_timeout':
      redirectUrl = routes.authenticationTimeout();
      break;
    default:
      redirectUrl = routes.loggedOut();
  }

  return auth.destroySession(redirectUrl)(req, res);
};

export default logoutHandler;
