interface CommentModel {
  post: string;
  user: string;
  text: string;
  createdAt: number;

  img?: string;
  updatedAt?: number;
}

interface CommentWithId extends CommentModel {
  id: string;
}
