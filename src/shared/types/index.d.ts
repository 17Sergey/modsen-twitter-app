type JWT_PAYLOAD = {
  email: UserModel["email"];
};

type PostWithUser = {
  user: UserWithId;
  post: PostWithId;
};

type PostsWithUser = {
  user: UserWithId;
  posts: PostWithId[];
};

type CommentWithUser = {
  user: UserWithId;
  comment: CommentWithId;
};
