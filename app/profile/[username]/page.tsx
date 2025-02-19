import ProfilePage from "@/pages/ProfilePage";

export default async function ProfileWithUsername({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const username = (await params).username;
  return <ProfilePage username={username} />;
}
