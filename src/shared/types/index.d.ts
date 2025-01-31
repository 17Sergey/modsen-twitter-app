type JWT_PAYLOAD = {
  email: UserModel["email"];
};

interface UserWithId extends UserModel {
  id: string;
}
