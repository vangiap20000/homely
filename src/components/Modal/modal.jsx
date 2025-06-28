import { getIconGlobal } from "../../utils/getAssets";

const Modal = ({
  isOpen,
  onClose,
  header,
  body,
  footer,
  isButtonClose = true,
}) => {
  return (
    <div
      style={{ display: isOpen ? "flex" : "none" }}
      className="fixed inset-0 flex items-center justify-center p-5 overflow-y-auto z-[99999] modal-container"
    >
      <div
        onClick={() => onClose()}
        className="modal-close-btn fixed inset-0 h-full w-full bg-gray-400/50 backdrop-blur-[32px]"
      />
      <div className="no-scrollbar relative flex w-full max-w-[700px] flex-col overflow-y-auto rounded-3xl bg-white p-6 dark:bg-gray-900 lg:p-11">
        {isButtonClose && (
          <button
            onClick={() => onClose()}
            className="cursor-pointer transition-color absolute right-5 top-5 z-[999] flex h-11 w-11 items-center justify-center rounded-full"
          >
            <img src={getIconGlobal("close.svg")} alt="close" />
          </button>
        )}

        <div className="modal-header">{header}</div>
        <div className="model-body">{body}</div>
        <div className="modal-footer">{footer}</div>
      </div>
    </div>
  );
};

export default Modal;
