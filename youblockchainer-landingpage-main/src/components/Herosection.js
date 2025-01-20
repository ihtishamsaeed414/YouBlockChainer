import { Box, Button, CardMedia, Grid, Skeleton, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import img0 from '../images/HS.png'
import img1 from '../images/HS1.png'
import img2 from '../images/HS2.png'
import img3 from '../images/HS3.png'
import bg from '../images/bg.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-scroll'
import { createMuiTheme } from "@material-ui/core"

const defaultTheme = createMuiTheme()
const { breakpoints, typography: { pxToRem } } = defaultTheme

const theme = {
    ...defaultTheme,
    overrides: {
        MuiTypography: {
            h1: {
                fontSize: "5rem",
                [breakpoints.down("xs")]: {
                    fontSize: "3rem"
                }
            }
        }
    }
}

function Herosection() {

    var items = [
        {
            name: "MYREELDREAM",
            description: "Incentivising NFT Holding",
            img: img0,
            nav: 'Avail'
        },
        {
            name: "Creators",
            description: "Generate content in seconds",
            img: img1,
            nav: 'Creators'
        },
        {
            name: "Experts",
            description: "Get experts help",
            img: img2,
            nav: 'Experts'
        },
        {
            name: "Consumers",
            description: "Connect your wallet and get started",
            img: img3,
            nav: 'Consumers'
        }
    ]

    return (
        <div id='Home'>
            <Carousel

                autoPlay={true}
                swipe={true}
                indicators={true}
                cycleNavigation={true}
                interval={4000}
                animation='fade'
                // navButtonsAlwaysVisible={true}
                sx={{ margin: { md: '1% 2%', sm: '1%', xs: '0' }, borderRadius: '20px', background: `transparent url("${bg}") no-repeat 0 50%`, backgroundSize: 'cover' }}
                indicatorContainerProps={{
                    style: {
                        zIndex: 1,
                        marginTop: "-10px",
                        position: "relative",
                        '& .MuiIconButton-root': {
                            color: 'red'
                        }
                    }
                }}
            >
                {
                    items.map((item, i) => <Item key={i} item={item} i={i === 0 ? true : false} />)
                }
            </Carousel>
        </div>
    )
}


function Item(props) {
    const [loadImg, setLoadImg] = useState(false)
    return (
        <>
            <Box sx={{ padding: '2%' }} >
                <Grid container>
                    <Grid item md={7} sm={6} xs={6} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '5%' }}>
                        <div>
                            <Typography sx={{ color: 'white', fontFamily: 'Poppins', fontSize: { md: '5rem', sm: '2rem', xs: '1.4rem' }, fontWeight: 'bolder ', margin: '0', padding: '0' }} >{props.item.name}</Typography>
                            {props.i && <Button onClick={() => window.open('https://app.myreeldream.ai/')} sx={{ backgroundColor: '#3770FF', color: 'white', border: '2px solid #3770FF', borderRadius: '50px', padding: '0.5% 2%', textTransform: 'none', '&:hover': { color: '#3770FF', border: '2px solid #3770FF' }, fontSize: { md: '15px', sm: '10px', xs: '10px' } }}>Launch App</Button>}
                            {!props.i && <Link to={props.item.nav} spy={true} smooth={true}>
                                <Typography variant='p' sx={{ margin: '0', color: 'white', fontSize: { md: '16px', xs: '12px' }, padding: '0', display: 'flex', alignItems: 'center' }}>{props.item.description} <ArrowForwardIcon sx={{ cursor: 'pointer', display: { md: 'flex', xs: 'none' } }} /></Typography>
                            </Link>}
                        </div>
                    </Grid>
                    <Grid item md={5} sm={6} xs={6} sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                        <CardMedia component='img' onLoad={() => setLoadImg(true)} image={props.item.img} sx={{ height: 'auto', width: { md: '100%', xs: '100%' } }} />
                        {
                            !loadImg && <Skeleton animation="wave" variant="rectangular" width="100%" sx={{ height: { md: '73vh', sm: '60vh', xs: '25vh' } }} />
                        }
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Herosection