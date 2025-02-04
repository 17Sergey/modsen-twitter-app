import { API_ROUTES } from "@/shared/constants/constants";

export const uploadImage = async (img: string) => {
  const response = await fetch(API_ROUTES.UPLOAD_IMAGE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ img }),
  });

  if (!response.ok) throw new Error("Failed to upload image. Try later");

  const data = await response.json();

  return data.imgUrl;
};
