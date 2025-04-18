import { ReactNode, RefObject } from "react";
import { MdOutlineClose } from "react-icons/md";
import useOutsideClick from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";

type ModalPropsType = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

function Modal({ open, children, onClose, title }: ModalPropsType) {
  const ref = useOutsideClick(onClose);
  return (
    open &&
    createPortal(
      <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen bg-secondary-800 bg-opacity-30 z-50">
        <div
          ref={ref as RefObject<HTMLDivElement>}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-secondary-0 p-4 shadow-lg transition-all duration-500 ease-out w-[calc(100vw-2rem)] sm:max-w-md max-h-[calc(100vh-2rem)] overflow-y-auto"
        >
          <div className="flex items-center justify-between border-b border-b-secondary-300 pb-2 mb-6">
            <p className="text-secondary-700 font-bold text-base">{title}</p>
            <button onClick={onClose}>
              <MdOutlineClose className="w-5 h-5 text-secondary-500" />
            </button>
          </div>
          {children}
        </div>
      </div>,
      document.body
    )
  );
}

export default Modal;
