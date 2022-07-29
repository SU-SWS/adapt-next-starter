/**
 * Typesafe storage helpers that allow for storing serializable data and auto parse values on retrieval
 */
export type StorageType = 'localStorage' | 'sessionStorage';
export const storageHelper = <T extends Record<string, any>>(type: StorageType) => ({
  /**
   * Get parsed and typed storage value
   */
  get: (key: keyof SessionStorageConfig) => {
    const data = typeof window !== 'undefined' && window[type].getItem(key);

    if (data) {
      try {
        const value = JSON.parse(data) as T[typeof key];
        return value;
      } catch (err) {
        // Cant parse the data? must be a bad value. Let's get rid of it...
        window[type].removeItem(key);
      }
    }

    return undefined;
  },
  /**
   * Set typesafe storage value. Omit value to clear
   */
  set: (key: keyof SessionStorageConfig, value?: SessionStorageConfig[typeof key]) => {
    if (typeof window !== 'undefined') {
      // Remove
      if (typeof value === 'undefined') {
        window[type].removeItem(key);
      } else {
        // Set
        window[type].setItem(key, JSON.stringify(value));
      }
    }
  },
});

/**
 * Add typed key/values here to use configure localStorage
 */
export interface LocalStorageConfig {
  // myLocalValue: { someAttribute?: string };
}
export type LocalStorageKeys = keyof LocalStorageConfig;
/**
 * Add typed key/values here to use configure sessionStorage
 */
export interface SessionStorageConfig {
  // mySessionValue: { someAttribute?: string };
  /**
   * Flag that prevents delete confirmation overlays from displaying
   */
  autoConfirmDelete: boolean;
}
export type SessionStorageKey = keyof SessionStorageConfig;

export const local = storageHelper('localStorage');
export const session = storageHelper('sessionStorage');

export const storage = { local, session };
