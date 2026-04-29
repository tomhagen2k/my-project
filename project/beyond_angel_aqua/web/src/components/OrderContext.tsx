"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import OrderModal from "./ui/OrderModal";

interface OrderContextType {
  openModal: (defaultOption?: number) => void;
  closeModal: () => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const openModal = (defaultOption: number = 0) => {
    setSelectedOption(defaultOption);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <OrderContext.Provider value={{ openModal, closeModal }}>
      {children}
      <OrderModal isOpen={isOpen} onClose={closeModal} defaultOption={selectedOption} />
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
}
