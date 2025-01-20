import React, { useEffect, useState } from 'react'
import About from './components/About'
import Artists from './components/Artists'
import Avail from './components/Avail'
import Brands from './components/Brands'
import Communities from './components/Communities'
import CountUp from './components/CountUp'
import Herosection from './components/Herosection'
import { Box, Typography, Button } from '@mui/material'
import BasicModal from './components/Modal'
import axios from 'axios'
import Knowledge from './components/Knowledge'
import Team from './components/Team'
import Blogs from './components/Blog'
import ContactUs from './components/ContactUs'

function LandingPage() {
    const [open, setOpen] = useState(false);
    const [video, setVideo] = useState(null)
    useEffect(() => {
        const func = async () => {
            let res = await axios.get('https://app.myreeldream.ai/api/v1/admin/')
            setVideo(res.data.video1)
        }
        func()
    }, [])

    return (
        <>
            {/* <div data-aos="zoom-in"><Herosection /></div> */}
            {/* <Brands />
            <Communities /> */}
            {/* <Artists /> */}
            <Avail />
            {/* <Knowledge /> */}
            <Blogs />
            <Team />
            <About />&nbsp;
            <Box sx={{ padding: { md: '0% 20%', xs: '0% 10%' } }}>
                <Typography variant='h2' sx={{ fontWeight: 'bold', textAlign: 'center', fontFamily: 'Poppins', margin: '0', padding: '0', fontSize: { md: '1.5rem', sm: '2rem', xs: '1.5rem' } }}><strong style={{ color: '#3770FF' }}>Get Started</strong> with your own movie production studio for Free</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Box sx={{ display: 'flex', marginTop: '0%', justifyContent: 'center', flexDirection: 'column' }}>
                        <p style={{ fontSize: '12px' }}>New to this website? </p>
                        <Button onClick={() => setOpen(true)} sx={{ backgroundColor: '#3770FF', color: 'white', border: '2px solid #3770FF', borderRadius: '50px', padding: '2% 2%', textTransform: 'none', '&:hover': { color: '#3770FF', border: '2px solid #3770FF' }, fontSize: { md: '15px', sm: '10px', xs: '10px' } }}>Get started</Button>
                    </Box>
                    <Box sx={{ display: 'flex', marginTop: '0%', justifyContent: 'center', flexDirection: 'column' }}>
                        <p style={{ fontSize: '12px' }}>Already have an account?</p>
                        <Button onClick={() => window.open('https://app.myreeldream.ai/')} sx={{ backgroundColor: '#3770FF', color: 'white', border: '2px solid #3770FF', borderRadius: '50px', padding: '2% 2%', textTransform: 'none', '&:hover': { color: '#3770FF', border: '2px solid #3770FF' }, fontSize: { md: '15px', sm: '10px', xs: '10px' } }}>Access account</Button>
                    </Box>
                </Box>
            </Box>
            <ContactUs />

            <BasicModal open={open} setOpen={setOpen} video={video} />
        </>
    )
}

export default LandingPage