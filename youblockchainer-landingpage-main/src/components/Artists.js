import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import artist1 from '../images/artist1.png'
import artist2 from '../images/artist2.png'


function Artists() {
    return (
        <div id='Artists' style={{ backgroundColor: '#F7F8F8', marginTop: '3%', padding: '3% 0' }}>
            <Box sx={{ marginTop: '3%', padding: '3%', display: 'flex', flexDirection: { md: 'row', sm: 'roe', xs: 'column' } }}>
                <Typography variant='h2' sx={{ fontWeight: 'bold', fontFamily: 'Poppins', margin: '0', padding: '0', fontSize: { md: '4rem', sm: '2rem', xs: '2rem' } }}><strong style={{ color: '#3770FF' }}>Artists </strong></Typography>
                <Grid container sx={{ marginLeft: { md: '4%', sm: '4%', xs: '0' } }} >
                    <Grid item md={6} sm={6}>
                        <div data-aos="zoom-out-right">

                            <CardContent sx={{ backgroundColor: 'transparent', height: '100%', borderRadius: '20px', display: 'flex' }}>
                                <CardMedia component='img' image={artist1} sx={{ height: '100px', width: 'auto' }} />
                                <div>
                                    <h2 style={{ margin: '0', padding: '0' }}>NFT Newsletters</h2>
                                    <Typography sx={{ fontSize: { md: '16px', sm: '14px', xs: '12px' } }}>NFT newsletters provide updates on the NFT market and are aimed at those interested in it. They include info on new releases, sales/events, market trends, and insights. Artists send them to subscribers.</Typography>
                                </div>
                            </CardContent>
                        </div>
                    </Grid>
                    <Grid item md={6} sm={6}>
                        <div data-aos="zoom-out-left">
                            <CardContent sx={{ backgroundColor: 'transparent', height: '100%', borderRadius: '20px', display: 'flex' }}>
                                <CardMedia component='img' image={artist2} sx={{ height: '100px', width: 'auto' }} />
                                <div>
                                    <h2 style={{ margin: '0', padding: '0' }}>NFT Membership</h2>
                                    <Typography sx={{ fontSize: { md: '16px', sm: '14px', xs: '12px' } }}>NFT memberships monetize and engage audiences with exclusive perks, deeper connections, and new revenue streams. They're a natural step for artists to connect with fans as NFTs grow in popularity.</Typography>
                                </div>
                            </CardContent>

                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Artists