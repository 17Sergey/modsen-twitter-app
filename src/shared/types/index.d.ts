type JWT_PAYLOAD = {
  email: UserModel["email"];
};

type PostWithUser = {
  user: UserWithId;
  post: PostWithId;
};

type PostsWithSameUser = {
  user: UserWithId;
  posts: PostWithId[];
};

type PaginationPosts = {
  posts: PostWithUser[];
  hasMore?: boolean;
};

type CommentWithUser = {
  user: UserWithId;
  comment: CommentWithId;
};
