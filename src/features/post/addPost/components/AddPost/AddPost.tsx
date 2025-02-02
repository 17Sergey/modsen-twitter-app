import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FC, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import styles from "./AddPost.module.scss";

import { postAPI } from "@/entities/post/api";
import CloseIcon from "@/shared/assets/close.svg";
import ImgIcon from "@/shared/assets/image.svg";
import { QUERY_KEYS } from "@/shared/constants/constants";
import Image from "next/image";

interface AddPostProps {
  onAdd?: VoidFunction;
}

interface CreatePostForm {
  text: string;
}

export const AddPost: FC<AddPostProps> = () => {
  const { user } = useAuth();

  const imgRef = useRef<HTMLInputElement>(null);
  const [img, setImg] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<CreatePostForm>();

  const queryClient = useQueryClient();
  const { mutate: createPost, isPending: isPosting } = useMutation({
    mutationFn: postAPI.createPost,
    onSuccess: () => {
      toast.success("Post created successfully");
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.POSTS],
      });
      reset();
      setImg(null);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImg(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setImg(null);
    if (imgRef.current) {
      imgRef.current.value = "";
    }
  };

  const onSubmit = (data: CreatePostForm) => {
    if (isPosting) return;

    const newPost = {
      userId: user?.id as string,
      text: data.text,
      img,
    };

    createPost(newPost);
  };

  return (
    <div>
      <h2>Add Tweet</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          className={styles.textarea}
          placeholder="What's happening?"
          {...register("text", { required: true })}
        />
        {img && (
          <div className={styles.imageContainer}>
            <Image
              alt="Remove uploaded img"
              aria-label="Remove uploaded img"
              src={CloseIcon}
              width={200}
              height={100}
              className={styles.closeIcon}
              onClick={clearImage}
            />
            <Image src={img} alt="Uploaded" />
          </div>
        )}
        <div className={styles.actions}>
          <div className={styles.actionContainer}>
            <div className={styles.imageUpload}>
              <Image
                alt="Upload img"
                aria-label="Upload img"
                src={ImgIcon}
                onClick={() => imgRef?.current?.click()}
              />
              <input
                className={styles.fileInput}
                type="file"
                accept="image/*"
                ref={imgRef}
                onChange={handleImageChange}
              />
            </div>
            <button className={styles.submitButton} disabled={isPosting}>
              {isPosting ? "Posting..." : "Post"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
