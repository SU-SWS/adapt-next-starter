import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { initialize } from '../redux/slices/auth';
import routes from '../routes';

export interface UseAuthConfig {
  // Path to redirect to on unauthorized
  unauthorizedRedirect?: string;
  // Whether to append the current path as final_destination on unauthorized redirect
  finalDestinationOnRedirect?: boolean;
  // Path to redirect to on authenticated
  authenticatedRedirect?: string;
}

/**
 * Hook for application auth
 */
export const useAuth = ({
  unauthorizedRedirect,
  finalDestinationOnRedirect = true,
  authenticatedRedirect,
}: UseAuthConfig = {}) => {
  const { replace: routerReplace, asPath: pagePath } = useRouter();
  const dispatch = useAppDispatch();
  const {
    initialized,
    user,
    error,
  } = useAppSelector((state) => state.auth);
  const isAuthenticated = !!user;
  const isAuthenticating = !initialized;

  /**
   * Simple login/logout navigate functions
   */
  const login = () => {
    if (typeof window !== 'undefined') window.location.href = routes.login();
  };
  const logout = () => {
    if (typeof window !== 'undefined') window.location.href = routes.logout();
  };

  const replace = useCallback(
    (path: string) => {
      // Use router for local, non-api route replace
      if (path.match(/^\//) && !path.match(/^\/api/)) {
        routerReplace(path);
      } else {
        // Use window for everything else
        window.location.replace(path);
      }
    },
    [routerReplace]
  );

  /**
   * Initialize auth once on first mount (ideally from app wrapping Authenticator component)
   */
  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  /**
   * Redirect unauthorized or error after initialized effect
   * Mostly used in AuthenticatedPage component
   * NOTE: This is mostly unused now that unauthorized redirects happen in our next
   * server middleware. It is a fine additional security layer to have in place, though.
   */
  useEffect(() => {
    if (initialized) {
      // Handle auth error
      if (error) {
        replace(routes.logout('auth_error'));
      } else if (!isAuthenticated && unauthorizedRedirect) {
        let redirectUrl = unauthorizedRedirect;

        // Add final_destination to redirect
        if (finalDestinationOnRedirect) {
          const [redirectPath, redirectQuery = ''] = redirectUrl.split('?');
          const finalDestination = encodeURIComponent(pagePath);
          const finalDestinationQuery = `${
            redirectQuery ? `${redirectQuery}&` : ''
          }final_destination=${finalDestination}`;
          redirectUrl = `${redirectPath}?${finalDestinationQuery}`;
        }

        replace(redirectUrl);
      }
    }
  }, [
    initialized,
    isAuthenticated,
    unauthorizedRedirect,
    finalDestinationOnRedirect,
    pagePath,
    error,
    replace,
  ]);

  /**
   * Redirect authorized effect
   * Use when you want to restrict pages from authenticated users (e.g. register user page)
   */
  useEffect(() => {
    if (isAuthenticated && authenticatedRedirect) {
      replace(authenticatedRedirect);
    }
  }, [isAuthenticated, authenticatedRedirect, replace]);

  return {
    login,
    logout,
    user,
    isAuthenticated,
    isAuthenticating,
  };
};
