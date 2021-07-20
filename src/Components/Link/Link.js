import { useModal } from '../../ModalContext';

const Link = ({ text, url, opensModal }) => {
  const { toggleModal } = useModal();

  const handleClick = () => {
    if (opensModal) {
      toggleModal(true);
    }
  };

  return (
    <a href={url} target="_blank" rel="noreferrer" onClick={handleClick}>
      {text}
    </a>
  );
};

export default Link;
