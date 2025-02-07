import { postAPI } from "@/entities/post/api";
import PostPage from "@/pages/PostPage";

export default async function PostWithId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const postId = (await params).id;

  const postData = await postAPI.getPostById(postId);
  let postDataObject = undefined;

  if (postData) {
    postDataObject = JSON.parse(JSON.stringify(postData));
  }

  return <PostPage postData={postDataObject} />;
}
