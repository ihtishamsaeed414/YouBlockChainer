import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import HorizontalLinearStepper from './StepperModal'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { md: 700, sm: 700, xs: 400 },
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({ open, setOpen, video }) {

    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ "& .css-1m2x5u7": { border: 'none', borderRadius: '10px' } }}
            >
                <Box sx={style}>
                    <HorizontalLinearStepper setOpen={setOpen} video={video}/>
                </Box>
            </Modal>
        </div>
    );
}