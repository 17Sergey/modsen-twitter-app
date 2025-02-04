import { imagesAPI } from "@/shared/api/images";
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

  if (img) {
    const imgUrl = (await imagesAPI.uploadImage(img)) as string;
    newPost.img = imgUrl;
  }

  await postRepository.create(newPost);
};
