interface UserModel {
  username: string;
  fullName: string;
  email: string;
  isSocialAuth: boolean;
  password: string | null;
  createdAt: number;

  phoneNumber?: string;
  birthDate?: Date;

  followers?: string[];
  following?: string[];
  likedPosts?: string[];
  postsCount?: number;

  profileImg?: string;
  coverImg?: string;

  bio?: string;
  link?: string;

  updatedAt?: number;
}
