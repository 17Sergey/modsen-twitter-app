import { useClickOutside } from "@/shared/hooks/useClickOutside";
import { useDisableBodyScroll } from "@/shared/hooks/useDisableBodyScroll";
import { FC, PropsWithChildren } from "react";
import styles from "./Modal.module.scss";

interface ModalProps extends PropsWithChildren {
  onClose: () => void;
  modalboxClassName?: string;
}

export const Modal: FC<ModalProps> = ({
  onClose,
  modalboxClassName,
  children,
}) => {
  const modalRef = useClickOutside(onClose);

  useDisableBodyScroll(true);

  return (
    <>
      <div className={styles.overlay}>
        <div className={`${styles.modal} ${modalboxClassName}`} ref={modalRef}>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
          <div className={styles.modalContent}>{children}</div>
        </div>
      </div>
    </>
  );
};
