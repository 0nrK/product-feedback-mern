import { createPortal } from "react-dom";

const Modal = ({ isOpened, children, onClose }) => {
    if (!isOpened) {
        return null;
    }

    return createPortal(
        <div className="">

            <div onClick={onClose} className="absolute  inset-y-0 inset-x-0 z-20  bg-opacity-70 bg-black"></div>
            <div className="fixed  my-auto inset-y-0 inset-x-0 mx-auto rounded-md  w-96 h-40 z-30 bg-red-100 p-3">
                <div className="justify-center">
                    <span className="absolute  cursor-pointer right-3 text-3xl" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                    <div className="modal-content">{children}</div>
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    );
};

export default Modal;