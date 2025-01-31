import { COLLECTIONS } from "@/app/api/firebase/collections";
import Repository from "@/shared/utils/Repository";

class PostRepository extends Repository<PostModel> {
  constructor() {
    super(COLLECTIONS.POSTS);
  }
}

export const postRepository = new PostRepository();
