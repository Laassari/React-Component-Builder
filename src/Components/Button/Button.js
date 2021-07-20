import { useModal } from '../../ModalContext';

const Button = ({ text, opensModal }) => {
  const { toggleModal } = useModal();

  const handleClick = () => {
    if (opensModal) {
      toggleModal(true);
    }
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
