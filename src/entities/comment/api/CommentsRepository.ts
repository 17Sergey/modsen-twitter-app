import { COLLECTIONS } from "@/app/api/firebase/collections";
import Repository from "@/shared/utils/Repository";

class CommentsRepository extends Repository<CommentModel> {
  constructor() {
    super(COLLECTIONS.COMMENTS);
  }
  async getByPostId(postId: PostWithId["id"]) {
    const allComments = await this.getAll();
    return allComments.filter(({ post }) => post === postId);
  }
}

export const commentsRepository = new CommentsRepository();
