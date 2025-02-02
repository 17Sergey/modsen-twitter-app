import { COLLECTIONS } from "@/app/api/firebase/collections";
import Repository from "@/shared/utils/Repository";

class PostRepository extends Repository<PostModel> {
  constructor() {
    super(COLLECTIONS.POSTS);
  }
  async getPostsByUserId(userId: UserWithId["id"]) {
    const allPosts = await this.getAll();
    return allPosts.filter(({ user }) => user === userId);
  }
}

export const postRepository = new PostRepository();
