import { Modal, Button } from '@mui/material';


interface ImageModalProps {
  open: boolean;
  imageUrl: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ open, imageUrl, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="image-modal-title"
      aria-describedby="image-modal-description"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
     <div>
          <img
            src={imageUrl}
            alt="Large Image"
            style={{ width: '100%', maxHeight: '90vh' }}
          />
          <Button
            variant="contained"
            onClick={handleClose}
            style={{ marginTop: '10px' }}
          >
            Fechar
          </Button>
        </div>
    </Modal>
  );
};

export default ImageModal;
