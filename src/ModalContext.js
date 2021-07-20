import { createContext } from 'react';
import { useContext, useState } from 'react';

const ModalContext = createContext();
ModalContext.displayName = 'ModalContext';

export const StoreProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(true);

  const toggleModal = (bool) => {
    setModalOpen(bool);
  };

  return (
    <ModalContext.Provider value={{ modalOpen, toggleModal }}>{children}</ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);

  return context;
};
