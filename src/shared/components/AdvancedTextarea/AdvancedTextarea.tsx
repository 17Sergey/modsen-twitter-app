/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import Image from "next/image";
import styles from "./AdvancedTextarea.module.scss";

import CloseIcon from "@/shared/assets/close.svg";
import ImgIcon from "@/shared/assets/image.svg";

interface AdvancedTextareaProps {
  placeholder?: string;
  onTextChange: (newText: string) => void;
  onImgChange: (newImg: string | null) => void;
  needToReset?: boolean;
}

interface AdvancedTextareaForm {
  text: string;
}

export const AdvancedTextarea: FC<AdvancedTextareaProps> = ({
  placeholder = "What's happening?",
  onTextChange,
  onImgChange,
  needToReset,
}) => {
  const imgRef = useRef<HTMLInputElement>(null);
  const [img, setImg] = useState<string | null>(null);

  const { register, watch, reset } = useForm<AdvancedTextareaForm>();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImg(reader.result);
          onImgChange(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setImg(null);
    onImgChange(null);

    if (imgRef.current) {
      imgRef.current.value = "";
    }
  };

  const text = watch("text");

  useEffect(() => {
    onTextChange(text);
  }, [text, onTextChange]);

  useEffect(() => {
    if (needToReset) {
      reset();

      setImg(null);
      if (imgRef.current) {
        imgRef.current.value = "";
      }
    }
  }, [needToReset, reset]);

  return (
    <form>
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        {...register("text")}
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
          <img src={img} alt="Uploaded" />
        </div>
      )}
      <div className={styles.actions}>
        <div className={styles.actionContainer}>
          <div className={styles.imageUpload}>
            <Image
              alt="Upload img"
              aria-label="Upload img"
              src={ImgIcon}
              onClick={() => imgRef.current?.click()}
            />
            <input
              className={styles.fileInput}
              type="file"
              accept="image/*"
              ref={imgRef}
              onChange={handleImageChange}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
