import React, { createContext, useContext, useState, useCallback } from "react";
import ModalConfirm from "../components/ModalConfirm";

const ConfirmContext = createContext();

export const ConfirmProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [resolver, setResolver] = useState(null); // resolve from Promise

  const confirm = useCallback(() => {
    setIsOpen(true);

    return new Promise((resolve) => {
      setResolver(() => resolve);
    });
  }, []);

  const handleConfirm = () => {
    setIsOpen(false);
    if (resolver) resolver(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
    if (resolver) resolver(false);
  };

  return (
    <ConfirmContext.Provider value={{ confirm }}>
      {children}
      <ModalConfirm
        isOpen={isOpen}
        closeModal={handleCancel}
        functionAction={handleConfirm}
      />
    </ConfirmContext.Provider>
  );
};

export const useGlobalConfirm = () => {
  const context = useContext(ConfirmContext);
  if (!context) {
    throw new Error("useGlobalConfirm must be used within ConfirmProvider");
  }
  return context.confirm;
};
