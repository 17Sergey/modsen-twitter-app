interface CommentModel {
  user: string;
  text: string;
  img?: string;
}

interface PostModel {
  user: string;
  text: string;
  createdAt: number;

  img?: string;

  likes?: string[];
  comments?: CommentModel[];

  updatedAt?: number;
}

interface PostWithId extends PostModel {
  id: string;
}
