type JWT_PAYLOAD = {
  email: UserModel["email"];
};

type PostsWithUser = {
  user: UserWithId;
  posts: PostWithId[];
};
