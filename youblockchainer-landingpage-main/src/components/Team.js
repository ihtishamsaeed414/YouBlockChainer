import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Team = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <section id="team">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{
          backgroundColor: "#002638",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "600px",
        }}
      >
        <Container maxWidth="100%">
          <Box
            sx={{
              mb: 4,
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              component="div"
              style={{
                fontFamily:
                  'Jost, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                fontWeight: 700,
                fontSize: "36px",
                lineHeight: "40px",
                color: "#ffffff",
              }}
            >
              Meet our team
            </Typography>
            <Typography
              variant="body1"
              component="div"
              style={{
                fontFamily:
                  'Jost, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "40px",
                color: "gray",
              }}
            >
              Here is Our Team to Meet.
            </Typography>
          </Box>
          <Grid
            container
            spacing={4}
            style={{
              display: "flex",
              justifyContent: "center",
              justifySelf: "center",
            }}
          >
            {Array.from({ length: 2 }).map((_, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      borderRadius: 4,
                      boxShadow: 3,
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <CardMedia
                      style={{}}
                      component="img"
                      image="https://www.pageport.com/img/profiles/max.jpg"
                      alt="Team Member 2"
                      sx={{ width: 150, height: 150, borderRadius: "50%" }}
                    />
                    <CardContent
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h5"
                        gutterBottom
                        component="div"
                        style={{
                          fontFamily: "Inter var",
                          fontWeight: 700,
                          fontSize: "22px",
                          lineHeight: "40px",
                          color: "Gray",
                        }}
                      >
                        John Doe
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{
                          fontFamily: "Inter var",
                          fontWeight: 500,
                          fontSize: "18px",
                          lineHeight: "40px",
                          color: "black",
                        }}
                      >
                        Producer
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </motion.div>
    </section>
  );
};

export default Team;

// // import React from 'react'

// // const Team = () => {
// //   return (
// //     <section id="team" style={{height:'300px', border:'1px solid red'}}>
// //         <h2 style={{ marginLeft: '1vw' }}>Team</h2>
// //     </section>
// //   )
// // }

// // export default Team

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Grid, Card, CardContent, Typography, Avatar } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   section: {
//     height: 'auto',
//     padding: theme.spacing(4),
//     background: '#f9f9f9',
//   },
//   card: {
//     maxWidth: 300,
//     margin: theme.spacing(2),
//   },
//   avatar: {
//     width: theme.spacing(10),
//     height: theme.spacing(10),
//     margin: 'auto',
//   },
// }));

// const Team = () => {
//   const classes = useStyles();

//   // Dummy data for team members
//   const teamMembers = [
//     { name: 'John Doe', role: 'Writer', image: '/john.jpg' },
//     { name: 'Jane Smith', role: 'Director', image: '/jane.jpg' },
//     { name: 'Tom Brown', role: 'Producer', image: '/tom.jpg' },
//   ];

//   return (
//     <section id="team" className={classes.section}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Our Team
//       </Typography>
//       <Grid container justifyContent="center">
//         {teamMembers.map((member, index) => (
//           <Grid item key={index}>
//             <Card className={classes.card}>
//               <Avatar alt={member.name} src={member.image} className={classes.avatar} />
//               <CardContent>
//                 <Typography variant="h6" component="h2" align="center">
//                   {member.name}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" align="center">
//                   {member.role}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </section>
//   );
// };

// export default Team;
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
// import { Box } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(4),
//   },
//   card: {
//     display: 'flex',
//     flexDirection: 'column',
//             color: "#ffffff",

//     borderRadius: theme.spacing(1),
//     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//     transition: 'box-shadow 0.3s ease',
//     '&:hover': {
//       boxShadow: '0px 8px 16px rgba(0, 0, 0, 1)',
//     },
//     // border:'5px solid red',
//     width:'310px',
//     height:'400px'
//   },
//   title: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     marginBottom: theme.spacing(1),
//   },
//   price: {
//     fontSize: '36px',
//     fontWeight: 'bold',
//     display:'flex',
//     flexDirection:'column',
//     marginBottom: theme.spacing(1),
//   },
//   button: {
//     marginTop: theme.spacing(2),
//     backgroundColor:'yellow',
//     // width:'100%'
//   },
//   featureList: {
//     marginTop: theme.spacing(1),
//   },
//   feature: {
//     fontSize: '16px',
//     marginBottom: theme.spacing(0.5),
//     display: 'flex',
//     alignItems: 'center',

//   },
// }));

// function Pricing() {
//   const classes = useStyles();

//   const plans = [
//     {
//       title: 'Free',
//       // price: 0,
//       features: [
//         '10 mins/wk of AI generation',
//         '10 GB storage',
//         'Limited exports',
//         '4 exports/wk with invideo logo',
//         '2.5M-standard media',
//       ],
//       buttonLabel: 'Try For Free',
//     },
//     {
//       title: 'Business',
//       price: 20,
//       features: [
//         '50 mins/mo of AI generation',
//         '100 GB storage',
//         'Unlimited exports',
//         'Up to 1 user',
//         '40/mo iStock',
//       ],
//       buttonLabel: 'Subscribe Now',
//     },
//     {
//       title: 'Professional',
//       price: 40,
//       features: [
//         '200 mins/mo of AI generation',
//         '400 GB storage',
//         'Unlimited exports',
//         'Up to 1 user',
//         '160/mo iStock',
//       ],
//       buttonLabel: 'Buy Now',
//     },
//   ];

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={3}>
//         {plans.map((plan) => (
//           <Grid item xs={12} sm={6} md={4} key={plan.title}>
//             <Card className={classes.card} style={{backgroundColor: "#002638",}}>
//               <CardContent>
//                 <Typography className={classes.title}>{plan.title}</Typography>
//                 {/* <Typography  className={classes.price}>${plan.price}
//                 <span style={{fontSize:'16px'}}>
//                 PER MONTH </span>
//                  </Typography> */}
//                 <Button variant="contained"  className={classes.button}>
//                   {plan.buttonLabel}
//                 </Button>
//                 <div style={{paddingTop:'12px'}}>
//                     <Typography style={{fontSize:'20px',
//             fontFamily:
//               'Jost, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
//             fontWeight: 700,
//             fontSize: "26px",
//             lineHeight: "40px",
//             color: "#ffffff",
//           }}>Features</Typography>
//                 </div>

//                 <div className={classes.featureList}>
//                   {plan.features.map((feature, index) => (

//                       <Typography key={index} className={classes.feature}>

//                       <span role="img" aria-label="Checkmark">
//                         ✔️
//                       </span>
//                      <span style={{marginLeft:'4px'}}>{feature}</span>
//                     </Typography>

//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }

// export default Pricing;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";

// const useStyles = makeStyles({
//   root: {
//     backgroundColor: '#F2F2F2',
//     width: '345px',
//     borderRadius: 4,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 600,
//     color: '#000000',
//   },
//   subtitle: {
//     fontSize: 18,
//     fontWeight: 400,
//     color: '#8E8E8E',
//     margin: '10px 0px',
//   },
//   price: {
//     fontSize: 36,
//     fontWeight: 800,
//     color: '#000000',
//   },
//   button: {
//     marginTop: '20px',
//     backgroundColor: '#007FFF',
//     color: '#FFFFFF',
//     borderRadius: 4,
//     width: '100%',
//   },
//   features: {
//     marginTop: '20px',
//     fontSize: 14,
//     fontWeight: 400,
//     color: '#8E8E8E',
//     lineHeight: 1.5,
//   },
// });



// function Pricing() {
//   const classes = useStyles();

//   const plans = [
//     {
//       title: "Free",
//       price: 0,
//       features: [
//         "10 mins/wk of AI generation",
//         "10 GB storage",
//         "4 exports/wk with invideo logo",
//         "2.5M-standard media",
//       ],
//       buttonLabel: "Try For Free",
//     },
//     {
//       title: "Business",
//       price: 20,
//       features: [
//         "50 mins/mo of AI generation",
//         "100 GB storage",
//         "Unlimited exports",
//         "Up to 1 user",
//         "40/mo iStock",
//       ],
//       buttonLabel: "Subscribe Now",
//     },
//     {
//       title: "Professional",
//       price: 40,
//       features: [
//         "200 mins/mo of AI generation",
//         "400 GB storage",
//         "Unlimited exports",
//         "Up to 1 user",
//         "160/mo iStock",
//       ],
//       buttonLabel: "Buy Now",
//     },
//   ];

//   return (
//     <div >
//       <Grid width="100%" spacing={8} style={{display:'flex', border:'1px solid' , height:'100vh'}}>
//         <Grid style={{display:'flex'}} spacing={8}>
//         <Card className={classes.root}>
//       <CardContent>
//         <Typography variant="h5" component="h2" className={classes.title}>
//           Free
//         </Typography>
//         <Typography variant="subtitle1" className={classes.subtitle}>
//           For anyone to try Al video creation
//         </Typography>
//         <Typography variant="h3" className={classes.price}>
//           $0
//         </Typography>
//         <Typography variant="h6" className={classes.subtitle}>
//           PER MONTH
//         </Typography>
//         <Button variant="contained" className={classes.button}>
//           Try For Free
//         </Button>
//         <Typography variant="body2" className={classes.features}>
//           <Grid container>
//             <Grid item xs={6}>
//               No credit card required. Free 14-days trial
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item xs={6}>
//               10 mins/wk of Al generation
//             </Grid>
//             <Grid item xs={6}>
//               10 GB storage
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item xs={6}>
//               4 exports/wk with invideo logo
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item xs={12}>
//               2.5M+ standard media
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item xs={12}>
//               x iStock
//             </Grid>
//           </Grid>
//         </Typography>
//       </CardContent>
//     </Card>
//     <Card className={classes.root}>
//       <CardContent>
//         <Typography variant="h5" component="h2" className={classes.title}>
//           Free
//         </Typography>
//         <Typography variant="subtitle1" className={classes.subtitle}>
//           For anyone to try Al video creation
//         </Typography>
//         <Typography variant="h3" className={classes.price}>
//           $0
//         </Typography>
//         <Typography variant="h6" className={classes.subtitle}>
//           PER MONTH
//         </Typography>
//         <Button variant="contained" className={classes.button}>
//           Try For Free
//         </Button>
//         <Typography variant="body2" className={classes.features}>
//           <Grid container>
//             <Grid item xs={6}>
//               No credit card required. Free 14-days trial
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item xs={6}>
//               10 mins/wk of Al generation
//             </Grid>
//             <Grid item xs={6}>
//               10 GB storage
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item xs={6}>
//               4 exports/wk with invideo logo
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item xs={12}>
//               2.5M+ standard media
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item xs={12}>
//               x iStock
//             </Grid>
//           </Grid>
//         </Typography>
//       </CardContent>
//     </Card>
//     <Card className={classes.root}>
//       <CardContent>
//         <Typography variant="h5" component="h2" className={classes.title}>
//           Free
//         </Typography>
//         <Typography variant="subtitle1" className={classes.subtitle}>
//           For anyone to try Al video creation
//         </Typography>
//         <Typography variant="h3" className={classes.price}>
//           $0
//         </Typography>
//         <Typography variant="h6" className={classes.subtitle}>
//           PER MONTH
//         </Typography>
//         <Button variant="contained" className={classes.button}>
//           Try For Free
//         </Button>
//         <Typography variant="body2" className={classes.features}>
//           <Grid container>
//             <Grid item xs={6}>
//               No credit card required. Free 14-days trial
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item xs={6}>
//               10 mins/wk of Al generation
//             </Grid>
//             <Grid item xs={6}>
//               10 GB storage
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item xs={6}>
//               4 exports/wk with invideo logo
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item xs={12}>
//               2.5M+ standard media
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item xs={12}>
//               x iStock
//             </Grid>
//           </Grid>
//         </Typography>
//       </CardContent>
//     </Card>

//         </Grid>


//         {/* <Grid item xs={12} sm={6} md={4}>
//           <Card className={classes.card}>
//             <CardContent>
//               <Typography className={classes.title}>
//                 {plans[1].title}
//               </Typography>
//               <Typography className={classes.price}>
//                 ${plans[1].price}
//                 <span style={{ fontSize: "16px" }}>PER MONTH </span>
//               </Typography>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 className={classes.button}
//               >
//                 {plans[1].buttonLabel}
//               </Button>
//               <div>
//                 <Typography style={{ fontSize: "20px",: "4px" }}>
//                   Features
//                 </Typography>
//               </div>
//               <div className={classes.featureList}>
//                 {plans[1].features.map((feature, index) => (
//                   <Typography key={index} className={classes.feature}>
//                     <span role="img" aria-label="Checkmark">
//                       ✔️
//                     </span>
//                     {feature}
//                   </Typography>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </Grid>

//         <Grid item xs={12} sm={6} md={4}>
//           <Card className={classes.card}>
//             <CardContent>
//               <Typography className={classes.title}>
//                 {plans[2].title}
//               </Typography>
//               <Typography className={classes.price}>
//                 ${plans[2].price}
//                 <span style={{ fontSize: "16px" }}>PER MONTH </span>
//               </Typography>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 className={classes.button}
//               >
//                 {plans[2].buttonLabel}
//               </Button>
//               <div>
//                 <Typography style={{ fontSize: "20px", paddingTop: "4px" }}>
//                   Features
//                 </Typography>
//               </div>
//               <div className={classes.featureList}>
//                 {plans[2].features.map((feature, index) => (
//                   <Typography key={index} className={classes.feature}>
//                     <span role="img" aria-label="Checkmark">
//                       ✔️
//                     </span>
//                     {feature}
//                   </Typography>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </Grid> */}
//       </Grid>
//     </div>
//   );
// }

// export default Pricing;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles({
//   root: {
//     backgroundColor: '#F2F2F2',
//     width: '345px',
//     borderRadius: 4,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 600,
//     color: '#000000',
//   },
//   subtitle: {
//     fontSize: 18,
//     fontWeight: 400,
//     color: '#8E8E8E',
//     margin: '10px 0px',
//   },
//   price: {
//     fontSize: 36,
//     fontWeight: 800,
//     color: '#000000',
//   },
//   button: {
//     marginTop: '20px',
//     backgroundColor: '#007FFF',
//     color: '#FFFFFF',
//     borderRadius: 4,
//     width: '100%',
//   },
//   features: {
//     marginTop: '20px',
//     fontSize: 14,
//     fontWeight: 400,
//     color: '#8E8E8E',
//     lineHeight: 1.5,
//   },
// });

// function CustomCard() {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardContent>
//         <Typography variant="h5" component="h2" className={classes.title}>
//           Free
//         </Typography>
//         <Typography variant="subtitle1" className={classes.subtitle}>
//           For anyone to try Al video creation
//         </Typography>
//         <Typography variant="h3" className={classes.price}>
//           $0
//         </Typography>
//         <Typography variant="h6" className={classes.subtitle}>
//           PER MONTH
//         </Typography>
//         <Button variant="contained" className={classes.button}>
//           Try For Free
//         </Button>
//         <Typography variant="body2" className={classes.features}>
//           <Grid container>
//             <Grid item xs={6}>
//               No credit card required. Free 14-days trial
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item xs={6}>
//               10 mins/wk of Al generation
//             </Grid>
//             <Grid item xs={6}>
//               10 GB storage
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item xs={6}>
//               4 exports/wk with invideo logo
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item xs={12}>
//               2.5M+ standard media
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item xs={12}>
//               x iStock
//             </Grid>
//           </Grid>
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }

// export default CustomCard;

