import { Card, CardContent, Divider, Grid } from '@mui/material'
import React from 'react'
import CountUp from 'react-countup'

function CountUp2() {
    return (
        <Grid sx={{ padding: '5%', marginTop: '-9%' }}>
            <Card sx={{ borderRadius: '10px' }}>
                <CardContent>
                    <Grid container>
                        <Grid item xs={0.25} />
                        <Grid item xs={3.5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h1 style={{ marginBottom: '0' }}>
                                <CountUp
                                    end={100}
                                    suffix='+'
                                    duration={2}
                                />
                            </h1>
                            <p style={{ fontSize: '14px', color: '#3F3F3F', paddingTop: '0', marginTop: '0' }}>Wait Listers</p>
                        </Grid>
                        <Grid item xs={0.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Divider orientation='vertical' />
                        </Grid>
                        <Grid item xs={3.5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h1 style={{ marginBottom: '0' }}>
                                <CountUp
                                    end={50}
                                    suffix='+'
                                    duration={2}
                                />
                            </h1>
                            <p style={{ fontSize: '14px', color: '#3F3F3F', paddingTop: '0', marginTop: '0' }}>Brands</p>
                        </Grid>
                        <Grid item xs={0.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Divider orientation='vertical' />
                        </Grid>
                        <Grid item xs={3.5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h1 style={{ marginBottom: '0' }}>
                                <CountUp
                                    end={10}
                                    suffix='+'
                                    duration={2}
                                />
                            </h1>
                            <p style={{ fontSize: '14px', color: '#3F3F3F', paddingTop: '0', marginTop: '0' }}>Communities</p>
                        </Grid>
                        <Grid item xs={0.25} />
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CountUp2