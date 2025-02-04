import { createPost } from "./createPost";
import { deletePost } from "./deletePost";
import { getPosts } from "./getPosts";
import { likeUnlikePost } from "./likeUnlikePost";

export const postAPI = {
  getPosts,
  createPost,
  likeUnlikePost,
  deletePost,
};
