/**
 * All case error message parser
 */
export const parseError = (error: any, defaultMessage = 'An error occured'): string => {
  if (typeof error === 'string') return error;
  // Check for error message
  if (error.message && typeof error.message === 'string') return error.message;
  // NOTE: Handle axios response errors?

  return defaultMessage;
};
