import { Button, CardMedia, Grid } from '@mui/material'
import React, { useState } from 'react'
import logo from '../images/Artboard 2 copy 4(1).png';
import BasicModal from './Modal';
import { Link, useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [num, setNum] = useState(0)
    const onClick = ((e) => {
        setNum(e.target.id);
        setOpen(true)
    })


    return (
        <div style={{ backgroundColor: '#002638', padding: '6% 3%' }}>
            <Grid container rowSpacing={4}>
                <Grid item md={2} xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <CardMedia component='img' image={logo} sx={{ height: '50px', width: '150' }} />
                    <p style={{ fontSize: '12px', color: '#BEBEBE', textAlign: 'center' }}> My Movie Studio </p>
                </Grid>
                <Grid item md={8} xs={12} sx={{ textAlign: 'center' }} >
                    {/* <p id='0' onClick={onClick} style={{ color: '#BEBEBE', cursor: 'pointer' }} >Privacy Policy</p>
                    <p id='1' onClick={onClick} style={{ color: '#BEBEBE', cursor: 'pointer' }} >Terms of use</p>
                    <p id='2' onClick={onClick} style={{ color: '#BEBEBE', cursor: 'pointer' }} >Security Policy</p> */}

                </Grid>
                <Grid item md={2} xs={12} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
                    <h4 style={{ color: '#BEBEBE', margin: '0', padding: '0' }} >Contact Us</h4>
                    <p style={{ fontSize: '12px', color: '#BEBEBE', textAlign: 'center' }} onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=113+B+Paola+Road,+Tarxien+1807+Malta", "_blank")}> Address - <strong style={{ cursor: 'pointer' }} >113 B Paola Road, Tarxien 1807 Malta <img style={{ width: '12px' }} src="https://wallpapercave.com/wp/wp4212576.jpg" alt="Flag of Malta" /></strong></p>
                    <a href={"mailto:support@myreeldream.ai"} style={{ fontSize: '12px', color: '#BEBEBE', textDecoration: 'none' }} > Email - <strong style={{ cursor: 'pointer' }} >support@myreeldream.ai</strong></a>
                </Grid>
            </Grid>
            <BasicModal open={open} setOpen={setOpen} num={num} />
        </div>
    )
}

export default Footer