import { postRepository } from "./PostRepository";

interface CreatePostParams {
  userId: UserWithId["id"];
  text: PostModel["text"];
  img: string | null;
}

export const createPost = async ({ userId, text, img }: CreatePostParams) => {
  const newPost: PostModel = {
    user: userId,
    text,
    createdAt: Date.now(),
  };
  debugger;

  if (img) newPost.img = img;

  await postRepository.create(newPost);
};
