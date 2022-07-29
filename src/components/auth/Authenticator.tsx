import React, { ReactNode } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { AuthIdleTimeoutOverlay } from './AuthIdleTimeoutOverlay';

export interface AuthenticatorProps {
  children?: ReactNode;
}

/**
 * Simple auth wrapper to initialize auth
 * NOTE: This component consumes redux context and thus must live below the redux Provider in the component hierarchy
 */
export const Authenticator = ({ children }: AuthenticatorProps) => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      {isAuthenticated && <AuthIdleTimeoutOverlay />}
      {children}
    </>
  );
};
