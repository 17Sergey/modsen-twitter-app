import { userRepository } from "./UserRepository";

interface FollowUnfollowParams {
  otherUserId: UserWithId["id"];
  currentUserId: UserWithId["id"];
}

export const followUnfollow = async ({
  otherUserId,
  currentUserId,
}: FollowUnfollowParams) => {
  if (otherUserId === currentUserId)
    throw new Error("Can't follow/unfollow yourself");

  const otherUser = (await userRepository.getById(otherUserId)) as UserWithId;

  const currentUser = (await userRepository.getById(
    currentUserId,
  )) as UserWithId;

  if (!otherUser || !currentUser)
    throw new Error("Error occured while looking for users. Try later");

  const isFollowing = currentUser?.following?.includes(otherUserId);

  let newUserFollowing;
  let newOtherUserFollowers;

  if (isFollowing) {
    // Unfollow
    newUserFollowing = currentUser?.following?.filter(
      (userId) => userId !== otherUserId,
    );
    newOtherUserFollowers = otherUser?.followers?.filter(
      (userId) => userId !== currentUserId,
    );
  } else {
    // Follow
    newUserFollowing = currentUser.following
      ? [...currentUser.following, otherUserId]
      : [otherUserId];

    newOtherUserFollowers = otherUser.followers
      ? [...otherUser.followers, currentUserId]
      : [currentUserId];
  }

  await updateUsers({
    currentUser,
    newUserFollowing,
    otherUser,
    newOtherUserFollowers,
  });

  return `User ${isFollowing ? "unfollowed" : "followed"} successfully!`;
};

interface UpdateUsersParams {
  currentUser: UserWithId;
  newUserFollowing: UserWithId["following"];
  otherUser: UserWithId;
  newOtherUserFollowers: UserWithId["followers"];
}

async function updateUsers({
  currentUser,
  newUserFollowing,
  otherUser,
  newOtherUserFollowers,
}: UpdateUsersParams) {
  await userRepository.update(currentUser.id, {
    ...currentUser,
    following: newUserFollowing,
  });

  await userRepository.update(otherUser.id, {
    ...otherUser,
    followers: newOtherUserFollowers,
  });
}
