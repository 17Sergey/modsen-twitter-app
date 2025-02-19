import { createPost } from "./createPost";
import { deletePost } from "./deletePost";
import { getFeedPosts } from "./getFeedPosts";
import { getPostById } from "./getPostById";
import { getPosts } from "./getPosts";
import { getSuggestedPosts } from "./getSuggestedPosts";
import { likeUnlikePost } from "./likeUnlikePost";
import { searchPosts } from "./searchPosts";

export const postAPI = {
  getPosts,
  getFeedPosts,
  getPostById,
  getSuggestedPosts,
  createPost,
  likeUnlikePost,
  deletePost,
  searchPosts,
};
