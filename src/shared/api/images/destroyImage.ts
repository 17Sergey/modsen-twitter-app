import { API_ROUTES } from "@/shared/constants/constants";

export const destroyImage = async (img: string) => {
  const response = await fetch(API_ROUTES.DESTROY_IMAGE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ img }),
  });

  if (!response.ok) throw new Error("Failed to destroy image. Try later");
};
