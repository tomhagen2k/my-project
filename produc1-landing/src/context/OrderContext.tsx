"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface OrderContextProps {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  selectedOption: number;
  setSelectedOption: (option: number) => void;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <OrderContext.Provider value={{ isModalOpen, openModal, closeModal, selectedOption, setSelectedOption }}>
      {children}
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
