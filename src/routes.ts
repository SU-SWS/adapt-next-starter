/**
 * Convenience functions for centralized routing
 * NOTE: These are represented as functions to handle optional route and query params if/when needed
 */
export type LogoutReason = 'auth_error' | 'auth_timeout';

// Public Routes
export const login = () => '/api/auth/login';
export const logout = (reason?: LogoutReason) => `/api/auth/logout${reason ? `?reason=${encodeURIComponent(reason)}` : ''}`;
export const loggedOut = () => '/logged-out';
export const authenticationFailed = () => '/authentication-failed';
export const authenticationTimeout = () => '/authentication-timeout';

// Authenticated Routes
export const home = () => '/';

export default {
  login,
  logout,
  loggedOut,
  authenticationFailed,
  authenticationTimeout,
  home,
};
