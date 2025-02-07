/* eslint-disable @next/next/no-img-element */
import CloseIcon from "@/shared/assets/close.svg";
import ImgIcon from "@/shared/assets/image.svg";
import Image from "next/image";
import {
  ChangeEvent,
  FC,
  FormEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import styles from "./AdvancedTextarea.module.scss";

interface AdvancedTextareaProps {
  placeholder?: string;
  onTextChange: (newText: string) => void;
  onImgChange: (newImg: string | null) => void;
  needToReset?: boolean;
  renderButton?: ReactNode;
}

interface AdvancedTextareaForm {
  text: string;
}

export const AdvancedTextarea: FC<AdvancedTextareaProps> = ({
  placeholder = "What's happening?",
  onTextChange,
  onImgChange,
  needToReset,
  renderButton,
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

    if (imgRef.current) {
      imgRef.current.value = "";
    }
  };

  const text = watch("text");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    onTextChange(text);
  }, [text, onTextChange]);

  useEffect(() => {
    onImgChange(img);
  }, [img, onImgChange]);

  useEffect(() => {
    if (needToReset) {
      reset();
      clearImage();
    }
  }, [needToReset, reset]);

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        {...register("text")}
      />
      {img && (
        <div className={styles.imageContainer}>
          <div className={styles.close}>
            <Image
              alt="Remove uploaded img"
              aria-label="Remove uploaded img"
              src={CloseIcon}
              className={styles.closeIcon}
              onClick={clearImage}
            />
          </div>
          <img src={img} alt="Uploaded" />
        </div>
      )}
      <div className={styles.footer}>
        <div>
          <Image
            className={styles.imgIcon}
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
        {renderButton}
      </div>
    </form>
  );
};
