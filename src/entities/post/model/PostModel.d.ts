interface PostModel {
  user: string;
  text: string;
  createdAt: number;

  img?: string;

  likes?: string[];
  comments?: string[];

  updatedAt?: number;
}

interface PostWithId extends PostModel {
  id: string;
}
