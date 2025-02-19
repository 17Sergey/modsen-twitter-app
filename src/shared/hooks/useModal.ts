import { useState } from "react";

export const useModal = (isDefaultOpen = false) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return { isOpen, openModal, closeModal };
};
