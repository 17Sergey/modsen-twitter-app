export const COLLECTIONS = {
  USERS: "users",
  POSTS: "posts",
  NOTIFICATIONS: "notifications",
} as const;

export type CollectionNames = (typeof COLLECTIONS)[keyof typeof COLLECTIONS];
