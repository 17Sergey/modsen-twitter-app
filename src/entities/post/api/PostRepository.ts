import { COLLECTIONS } from "@/appFSD/api/firebase/collections";
import Repository from "@/shared/utils/Repository";
import { getCountFromServer, getDocs, query, where } from "firebase/firestore";

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
  async searchPosts(queryString: string, userId: UserWithId["id"]) {
    const q = query(this.collectionRef, where("user", "==", userId));

    const snapshot = await getDocs(q);
    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as PostWithId[];

    const filteredPosts = posts.filter(({ text }) =>
      text.toLocaleLowerCase().includes(queryString.toLocaleLowerCase()),
    );

    return filteredPosts;
  }
}

export const postRepository = new PostRepository();
