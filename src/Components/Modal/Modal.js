import { useModal } from '../../ModalContext';
import './modal.css';

const Modal = ({ children, isOpen, ...props }) => {
  const { modalOpen, toggleModal } = useModal();

  const closeModal = () => toggleModal(false);

  return (
    <div className={`modal ${modalOpen ? '' : 'hidden'}`}>
      <div {...props}>
        {children}

        <button onClick={closeModal}>&times;</button>
      </div>
    </div>
  );
};

export default Modal;
