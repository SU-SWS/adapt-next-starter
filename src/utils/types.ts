/**
 * Helper types
 */
export type DeepPartial<T extends {}> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type WithBody<T extends {}, B extends {}> = Omit<T, 'body'> & {
  body: B;
};
