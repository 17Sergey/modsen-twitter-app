import { useEffect } from "react";

export const useDisableBodyScroll = (condition: boolean) => {
    useEffect(() => {
        if (condition) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [condition]);
};
