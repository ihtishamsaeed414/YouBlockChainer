import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function CTA() {

    // const onDownload = () => {
    //     fetch('MYREELDREAM.pdf').then(response => {
    //         response.blob().then(blob => {
    //             // Creating new object of PDF file
    //             const fileURL = window.URL.createObjectURL(blob);
    //             // Setting various property values
    //             let alink = document.createElement('a');
    //             alink.href = fileURL;
    //             alink.download = 'MYREELDREAM.pdf';
    //             alink.click();
    //         })
    //     })
    // };

    return (
        <Box sx={{ background: 'linear-gradient(91.97deg, #002638 -39.63%, #3770FF 110.12%)', marginTop:'10%',height:{md:'40vh', xs:'22vh'},  padding: '3%', display: 'flex', flexDirection: 'column', justifyContent:'space-evenly', alignItems: 'center' }}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Typography variant='h2' sx={{ fontWeight: 'bold', fontFamily: 'Poppins', fontSize: { md: '35px', sm: '30px', xs: '22px' }, margin: '0', padding: '0' }}><strong style={{ color: 'white' }}>MYREELDREAM </strong></Typography>
            <p style={{ color: '#f6f6f6', margin: '0', padding: '0' }}> My Movie Studio </p>
        </div>
            <Button onClick={() => window.open('https://app.myreeldream.ai/')} sx={{ backgroundColor: 'white', marginTop: '3%', color: '#3770FF', border: '2px solid white', borderRadius: '50px', padding: '0.5% 2%', textTransform: 'none', fontWeight: 'bold', '&:hover': { color: 'white', border: '2px solid white' }, fontSize: { md: '15px', sm: '10px', xs: '14px' } }}>Launch App</Button>
        </Box>
    )
}

export default CTA