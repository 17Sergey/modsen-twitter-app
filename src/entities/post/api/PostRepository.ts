import { COLLECTIONS } from "@/app/api/firebase/collections";
import Repository from "@/shared/utils/Repository";
import { getCountFromServer, query, where } from "firebase/firestore";

class PostRepository extends Repository<PostModel> {
  constructor() {
    super(COLLECTIONS.POSTS);
  }
  async getPostsByUserId(userId: UserWithId["id"]) {
    const allPosts = await this.getAll();
    return allPosts.filter(({ user }) => user === userId);
  }
  async getUserPostsCount(userId: UserWithId["id"]) {
    const postsQuery = query(this.collectionRef, where("user", "==", userId));
    const snapshot = await getCountFromServer(postsQuery);
    return snapshot.data().count;
  }
}

export const postRepository = new PostRepository();
