import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { modalStyle } from '../styles/globalStyles';
import { TextField } from '@mui/material';
import useStockOperations  from '../hooks/useStockOperations';
import { getStaticProps } from '../constants/stockTypes';

export default function FirmModal({ open, handleClose }) {
  const { postStockInfo } = useStockOperations();
  const { FIRMS } = getStaticProps;
  //? Properties are same as Backend post request
  const [info, setInfo] = useState({
    name: '',
    address: '',
    phone: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);

    // Post the info to the backend
    postStockInfo(FIRMS, info);

    handleClose();
    // Clear the form
    setInfo({
      name: '',
      address: '',
      phone: '',
      image: '',
    });
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            ...modalStyle,
            '@media (max-width: 600px)': {
              width: '350px',
            },
            gap: 2,
          }}
          component='form'
          display={'flex'}
          flexDirection={'column'}
          onSubmit={handleSubmit}
        >
          <TextField
            required
            id='firm-name'
            label='Firm Name'
            name='name'
            variant='outlined'
            value={info?.name}
            onChange={handleChange}
          />
          <TextField
            required
            id='firm-address'
            name='address'
            label='Firm Address'
            variant='outlined'
            value={info?.address}
            onChange={handleChange}
          />
          <TextField
            required
            id='firm-phone'
            label='Firm Phone'
            name='phone'
            variant='outlined'
            value={info?.phone}
            onChange={handleChange}
            type='tel'
          />
          <TextField
            required
            id='firm-image'
            label='Firm Image'
            name='image'
            variant='outlined'
            value={info?.image}
            onChange={handleChange}
            type='url'
          />
          <Button variant='contained' type='submit'>
            Add Firm
          </Button>
        </Box>
      </Modal>
    </>
  );
}
