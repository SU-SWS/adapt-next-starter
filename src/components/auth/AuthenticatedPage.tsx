import React, { ReactNode } from 'react';
import { useAuth } from '../../hooks/useAuth';

export interface AuthenticatedPageProps {
  children?: ReactNode;
  // Component rendered when auth.isAuthenticating === true
  authenticatingComponent?: ReactNode;
  // Path to redirect to on resolved unauthorized
  unauthorizedRedirect?: string;
  // Whether to append the current path as final_destination on unauthorized redirect
  finalDestinationOnRedirect?: boolean;
  // Path to redirect to on resolved authenticated
  authenticatedRedirect?: string;
}

export const AuthenticatedPage = ({
  children,
  authenticatingComponent,
  unauthorizedRedirect = '/api/auth/login',
  finalDestinationOnRedirect = true,
  authenticatedRedirect,
}: AuthenticatedPageProps) => {
  const { isAuthenticated, isAuthenticating } = useAuth({
    unauthorizedRedirect,
    finalDestinationOnRedirect,
    authenticatedRedirect,
  });

  // Render children if authenticated
  if (isAuthenticated) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  }

  // Render loading component if set
  if (isAuthenticating && authenticatingComponent) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{authenticatingComponent}</>;
  }

  // Render nothing
  return null;
};
