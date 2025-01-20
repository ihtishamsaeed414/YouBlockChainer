import { CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import brands from '../images/brands.png'

function Brands() {
    return (
        <div id='Creators' style={{ marginTop: '3%', padding: '3%' }}>
            <Grid container sx={{ display: { md: 'flex', sm: 'flex', xs: 'none' }, justifyContent: 'center', alignItems: 'center' }}>
                <Grid item md={5} sm={5}>
                    <div data-aos="fade-up-right"> <CardMedia component='img' image={brands} /></div>
                </Grid>
                <Grid item md={1} sm={1} />
                <Grid item md={6} sm={6}>
                    <div data-aos="fade-up-left">
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Typography variant='h2' sx={{ fontWeight: 'bold', fontFamily: 'Poppins', margin: '0', padding: '0', fontSize: { md: '4rem', sm: '2rem', xs: '2rem' } }}><strong style={{ color: '#3770FF' }}>Creators </strong> - Generate content in seconds </Typography>
                            <Typography variant='p' sx={{ fontSize: { md: '16px', sm: '14px', xs: '12px' } }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum accumsan dolor id tincidunt. Pellentesque nec eros euismod, sodales nulla ac, rhoncus libero. Mauris tristique quis quam in facilisis. Sed ac ligula sit amet est malesuada sagittis. Duis id aliquam velit. Sed vel sollicitudin magna. Nullam malesuada libero vel tortor ultricies vehicula. Aenean nec ullamcorper ipsum. Sed vitae aliquet risus.
                            </Typography>
                        </Box>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ marginTop: '5%', display: { md: 'none', sm: 'none', xs: 'flex' } }}>
                <Grid item md={3} sm={6} xs={12}>
                    <CardContent sx={{ backgroundColor: 'white', height: '100%', borderRadius: '20px', boxShadow: 'rgba(235, 235, 235, 0.77) 0px 7px 29px 0px' }}>
                        <CardMedia component='img' image={brands} sx={{ height: '100px', width: 'auto', marginTop: '-4rem' }} />
                        <h2 style={{ margin: '0', padding: '0' }}><strong style={{ color: '#3770FF' }}>Brands </strong> - NFT-gated offers platform</h2>
                        <p style={{ fontSize: '14px' }} >
                            NFT-gating is a common tool used by NFT project teams to create value for community
                            members. Brands too can use NFT-gating or token-gating to target affluent community
                            members by giving exclusive offers, products, and other benefits to drive growth.
                            NFT-gating can be used to ensure that only qualified or vetted holders are able to
                            participate in a particular offer, event, or sale of product. Brands can use this platform
                            for marketing campaigns, specifically, targeting web3 ecosystem.
                        </p>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Brands