import { CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import Tabs from './Tabs'
import Comm from '../images/Comm.png'

function Communities() {
    return (
        <div id='Experts' style={{ marginTop: '0%', padding: '0% 3%' }}>
            <div data-aos="fade-up">
                <Grid container sx={{ display: { md: 'flex', sm: 'flex', xs: 'none' }, justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item md={6} sm={6}>
                        <Typography variant='h2' sx={{ fontWeight: 'bold', fontFamily: 'Poppins', margin: '0', padding: '0', fontSize: { md: '4rem', sm: '2rem', xs: '2rem' } }}>Get<strong style={{ color: '#3770FF' }}> experts </strong>  help</Typography>
                        <Tabs />
                    </Grid>
                    <Grid item md={1} />
                    <Grid item md={5} sm={6}>
                        <CardMedia component='img' image={Comm} />
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ marginTop: '5%', display: { md: 'none', sm: 'none', xs: 'flex' } }}>
                    <Grid item md={3} sm={6} xs={12}>
                        <CardContent sx={{ backgroundColor: 'white', height: '100%', borderRadius: '20px', boxShadow: 'rgba(235, 235, 235, 0.77) 0px 7px 29px 0px' }}>
                            <CardMedia component='img' image={Comm} sx={{ height: '100px', width: 'auto', marginTop: '-4rem' }} />
                            <h2 style={{ margin: '0', padding: '0' }}><strong style={{ color: '#3770FF' }}>Communities </strong></h2>
                            <p style={{ fontSize: '14px' }} >
                                <Tabs />
                            </p>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Communities