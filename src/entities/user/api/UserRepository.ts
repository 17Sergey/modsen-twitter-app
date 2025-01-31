import { COLLECTIONS } from "@/app/api/firebase/collections";
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
}

export const userRepository = new UserRepository();
