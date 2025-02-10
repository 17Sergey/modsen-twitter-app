import { COLLECTIONS } from "@/app/api/firebase/collections";
import { query, where, getDocs } from "firebase/firestore";
import Repository from "@/shared/utils/Repository";

class UserRepository extends Repository<UserModel> {
  constructor() {
    super(COLLECTIONS.USERS);
  }
  async getUserByEmail(email: string) {
    const allUsers = await this.getAll();
    return allUsers.find((user) => user.email === email);
  }
  async getUserByUsername(username: string) {
    const allUsers = await this.getAll();
    return allUsers.find((user) => user.username === username);
  }
  async searchUsers(queryString: string) {
    const q = query(
      this.collectionRef,
      where("username", ">=", queryString),
      where("username", "<=", queryString + "\uf8ff"),
    );

    const snapshot = await getDocs(q);
    const users = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as UserWithId[];

    return users;
  }
}

export const userRepository = new UserRepository();
