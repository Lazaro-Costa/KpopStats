import { Box, Grid } from '@mui/material';
import { PicturesToArray } from '../../utils/PicturesToArray';
import { IGetPic } from '../../Interfaces/Interfaces.api';
import ImageModal from './ImageModal';
import React from 'react';

const AuxImage = ({pictures} : {pictures: IGetPic}) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState('');
  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage('');
  };
  return (
    <Box p={2} maxHeight={'700px'}>
      <Grid container spacing={1} alignItems={'start'} justifyItems={'center'}>
        {PicturesToArray(pictures).map((imageUrl, index) => (
          <Grid item key={index} xs={6} sm={4} md={3} lg={6}>
            <img
              src={imageUrl}
              alt={`Image ${index}`}
              onClick={() => handleImageClick(imageUrl)}
              // style={{ width: '100%', cursor: 'pointer', maxHeight: '100%' }}
              className='min-w-full min-h-full object-cover cursor-pointer'
            />
          </Grid>
        ))}
      </Grid>
      <ImageModal
        open={modalOpen}
        imageUrl={selectedImage}
        onClose={handleCloseModal}
      />
    </Box>
  );
};

export default AuxImage;
