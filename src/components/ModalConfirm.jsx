import Modal from "./Modal";

const ModalConfirm = ({ isOpen = false, closeModal, functionAction }) => {
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => closeModal()}
      header={
        <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
        Confirm Action!
        </h2>
      }
      body={
        <p className="text-gray-600 dark:text-gray-300">
        Are you sure about this change of action?
        </p>
      }
      footer={
        <div className="flex justify-center sm:justify-end gap-4 mt-5">
          <button
            onClick={() => closeModal()}
            className="cursor-pointer px-6 py-3 font-semibold rounded-lg transition-colors duration-300 bg-gray-300 text-gray-600 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={functionAction}
            className="cursor-pointer px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-dark transition-colors duration-300"
          >
            Confirm
          </button>
        </div>
      }
    />
  );
};

export default ModalConfirm;
