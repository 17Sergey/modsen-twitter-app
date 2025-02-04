import { useState } from "react";

export const useAdvancedTextarea = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState<string | null>(null);
  const [needToReset, setNeedToReset] = useState(false);

  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  const handleImgChange = (newImg: string | null) => {
    setImg(newImg);
  };

  const triggerReset = () => {
    setNeedToReset(true);
  };

  return {
    text,
    img,
    handleTextChange,
    handleImgChange,
    needToReset,
    triggerReset,
  };
};
