import React from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
const ContactUs = () => {
  return (
    <div
      className="container-fluid form-container"
      style={{ paddingTop: "6rem" }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="form-card"
        >
          <Grid container className="covero">
            <Grid
              item
              xs={12}
              md={5}
              className="addresscol"
              style={{ backgroundColor: "#3770FF", padding: "2rem" }}
            >
              <div className="address-cover">
                <Typography
                  variant="h2"
                  gutterBottom
                  style={{ color: "#ffffff", marginBottom: "1rem" }}
                >
                  Get in Touch
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  style={{ color: "#ffffff" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque felis ex, lacinia in bibendum vitae, aliquet vel
                  diam.
                </Typography>
                <address style={{ color: "#ffffff" }}>
                  4930 Alaska Hwy, Fort Nelson <br />
                  British Columbia, V0C 1C0
                </address>
                <ul style={{ listStyleType: "none", padding: 0, alignItems: "center" }}>
                  <li style={{ color: "white", display: "flex", alignItems: "center", marginRight: "1rem" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      <path fill="white" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z" />
                    </svg>{" "}&nbsp;
                    +1 (344) 132-3434-34
                  </li>&nbsp;
                  <li style={{ color: "white", display: "flex", alignItems: "center" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      <path fill="white" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z" />
                    </svg>{" "}&nbsp;
                    support@smarteyeapps.com
                  </li>
                </ul>

              </div>
            </Grid>
            <Grid item xs={12} md={7} className="formcol">
              <form>
                <Paper className="form-cover" style={{ padding: "2rem" }}>
                  <div
                    className="form-row row"
                    style={{ marginBottom: "1rem" }}
                  >
                    <TextField label="Enter Full Name" required fullWidth />
                  </div>
                  <div
                    className="form-row row"
                    style={{ marginBottom: "1rem" }}
                  >
                    <TextField label="Enter Mobile Number" fullWidth />
                  </div>
                  <div
                    className="form-row row"
                    style={{ marginBottom: "1rem" }}
                  >
                    <TextField label="Enter Email Address" required fullWidth />
                  </div>
                  <div
                    className="form-row row"
                    style={{ marginBottom: "1rem" }}
                  >
                    <TextField label="Enter Subject" fullWidth />
                  </div>
                  <div
                    className="form-row row"
                    style={{ marginBottom: "1rem" }}
                  >
                    <TextField
                      label="Enter Your Message"
                      required
                      multiline
                      rows={4}
                      fullWidth
                    />
                  </div>
                  <div
                    className="form-row row mb-0"
                    style={{ marginBottom: "1rem" }}
                  >
                    <Button variant="contained" color="primary">
                      Submit
                    </Button>
                  </div>
                </Paper>
              </form>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </div>
  );
};

export default ContactUs;

// import { Box, Typography, TextField, Container, Button } from "@mui/material";
// import React from "react";

// const ContactUs = () => {
//   return (
//     <section id='contact'>

//       <Container sx={{ my: 9 }}>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Typography sx={{ color: "#3770FF" }} variant="h2">
//             Contact Us
//           </Typography>
//           <Typography>
//             We'd love to hear from anyone and everyone, drop a line below.
//           </Typography>
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             py: 2,
//             gap: 2,
//           }}
//         >
//           <TextField
//             sx={{ width: "50vw" }}
//             required
//             id="outlined-firstName"
//             label="Full Name"
//           />
//           <TextField
//             sx={{ width: "50vw" }}
//             required
//             id="outlined-firstName"
//             label="Email"
//           />
//           <TextField
//             sx={{ width: "50vw" }}
//             required
//             id="outlined-firstName"
//             label="Company Name"
//           />
//           <TextField
//             sx={{ width: "50vw" }}
//             required
//             id="outlined-firstName"
//             label="Phone Number"
//           />
//           <Button
//             sx={{
//               width: "50vw",
//               color: "white",
//               backgroundColor: "#3770FF",
//               "&:hover": { color: "#3770FF", border: "2px solid #3770FF" },
//             }}
//           >
//             let's Talk
//           </Button>
//         </Box>
//       </Container>
//     </section>
//   );
// };

// export default ContactUs;
