import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Typography, useMediaQuery } from '@mui/material';

const smallButton = {
  fontSize:16
}

const bigButton = {
  fontSize:24
}

const smallModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1,
    bgcolor: '#282c34',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  };
  
  const bigModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#282c34',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  };

  export default function BasicModal(recipeJson :any) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const input = recipeJson.input


    // Lets modal check if 
    const isPhone = useMediaQuery("(max-width:600px)");

    return (
      <div>
        <Button className='modalButton' sx={isPhone ? smallButton:bigButton} onClick={handleOpen}>{input.title}</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={isPhone ? smallModal:bigModal}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {input.title}
            </Typography>
            <img src={input.image} alt=""></img>
              <Button
              href = {input.sourceUrl} 
              variant="outlined">
                Link!
              </Button>
          </Box>
          
            

        </Modal>
      </div>
    );
  }