"use client";

import React, { createContext, useContext, useState } from "react";

interface OrderContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  isSuccess: boolean;
  setSuccess: (val: boolean) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <OrderContext.Provider value={{ isOpen, openModal, closeModal, isSuccess, setSuccess }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};
