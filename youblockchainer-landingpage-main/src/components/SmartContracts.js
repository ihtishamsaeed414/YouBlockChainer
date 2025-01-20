import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    color: "#ffffff",
    borderRadius: theme.spacing(2),
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease",
    "&:hover": {
      boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.5)",
    },
    width: "300px",
    height: "410px",
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
    padding: "10px",
    background: "linear-gradient(91.97deg, #002638 -39.63%, #3770FF 110.12%)",
    cursor: "pointer",
  },
  cardhead: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
  sectionhead: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    display: "flex ",
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
    flexDirection: "column",
    // width: "80%",
    // border:'2px solid red',
    margin: "auto",
    textAlign: "center",
  },
  head: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    display: "flex ",
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
    flexDirection: "column",
    // border:'2px solid red',
    margin: "auto",
    textAlign: "center",
  },
  section: { marginTop: "100px",
  width: "80%",
},
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
  button: {
    backgroundColor: "yellow",
    color: "#000000", // text color
    marginTop: theme.spacing(1), // adjust as needed
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "orange", // hover color
    },
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justifyItems: "center",
    // border:'2px solid red',
    height: "100%",
    width:'100%'
  },
}));

const SmartContracts = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <Typography variant="h1" className={classes.title}>
          Smart Contracts on myreeldream.ai
        </Typography>
        {/* <Typography variant="h5" 
        // className={classes.title}
        >
          Smart Contracts on myreeldream.ai
        </Typography> */}
        <Typography
          variant="body1"
          // className={classes.title}
          style={{width:'80%'}}
        >
          Welcome to myreeldream.ai, where innovation meets efficiency in the
          world of filmmaking. In this section, we explore the integration of
          smart contracts into our platform, revolutionizing the way agreements
          are made, managed, and executed.
        </Typography>
      </div>
      <div className={classes.section}>
        <div className={classes.sectionhead}>
          <Typography variant="h4">
            How Smart Contracts Work on the Platform
          </Typography>
          <Typography variant="body1" style={{ marginTop: "12px" }}>
            Smart contracts are self-executing contracts with the terms of the
            agreement directly written into code. On myreeldream.ai, smart
            contracts automate and facilitate various aspects of the filmmaking
            process, including:
          </Typography>
        </div>
        <Grid
          container
          spacing={4}
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "5px",
            marginTop: "20px",
          }}
        >
          <Grid item>
            <Card className={classes.card}>
              <CardContent
                className={classes.content}
                style={{ justifyContent: "space-between" }}
               
              >
                <div>
                  <Typography className={classes.cardhead}>
                    Agreement Settlement
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Backstage is a popular platform for actors to find audition
                    opportunities for film, TV, theater, and more. They offer a
                    comprehensive database of casting calls from around the
                    world
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardContent
                className={classes.content}
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <Typography className={classes.cardhead}>
                    Payment Transactions
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Smart contracts automate payment transactions, ensuring that
                    funds are transferred securely and efficiently upon the
                    fulfillment of contract terms. By eliminating the need for
                    traditional intermediaries, smart contracts reduce
                    transaction costs and streamline financial processes
                  </Typography>
                </div>
                
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardContent
                className={classes.content}
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <Typography className={classes.cardhead}>
                    Royalty Distribution
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Smart contracts facilitate royalty distribution for
                    filmmakers and content creators, ensuring fair and
                    transparent compensation based on predefined terms and
                    conditions. By encoding royalty agreements into
                    self-executing code, smart contracts minimize disputes and
                    maximize trust among stakeholders
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
   
       <div className={classes.section}>
        <div className={classes.sectionhead}>
          <Typography variant="h4">
            Benefits of Using Smart Contracts for Agreements
          </Typography>
          <Typography variant="body1" style={{ marginTop: "12px" }}>
            The integration of smart contracts offers numerous benefits for
            users on myreeldream.ai, including
          </Typography>
        </div>
        <Grid
          container
          spacing={4}
          style={{
            padding: "5px",
            marginTop: "20px",
            // border: "solid red 2px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Grid item>
            <Card className={classes.card}>
              <CardContent
                className={classes.content}
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <Typography className={classes.cardhead}>
                    Efficiency
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Smart contracts are executed on a decentralized blockchain
                    network, where transaction data is stored across multiple
                    nodes, making it virtually impossible to alter or
                    manipulate. By leveraging blockchain technology, we ensure
                    the immutability and transparency of contract execution.
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardContent
                className={classes.content}
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <Typography className={classes.cardhead}>
                    Payment Transactions
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Smart contracts automate payment transactions, ensuring that
                    Transparency: Smart contracts provide transparent and
                    immutable records of agreement terms and transaction
                    history, ensuring accountability and trust among parties. By
                    leveraging blockchain technology, smart contracts offer
                    unparalleled transparency and auditability, reducing the
                    risk of disputes and misunderstandings.
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardContent
                className={classes.content}
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <Typography className={classes.cardhead}>Security</Typography>
                  <Typography variant="body1" paragraph>
                    Smart contracts enhance security by encrypting sensitive
                    information and executing transactions in a tamper-proof
                    manner. By removing the need for intermediaries and central
                    authorities, smart contracts mitigate the risk of fraud,
                    manipulation, and unauthorized access, ensuring the
                    integrity and confidentiality of agreements.
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div> 
      <div className={classes.section}>
        <div className={classes.sectionhead}>
          <Typography variant="h4">
            Transparency and Security Measures
          </Typography>
          <Typography variant="body1" style={{ marginTop: "12px" }}>
            At myreeldream.ai, we prioritize transparency and security in all
            aspects of our platform. To ensure the integrity and reliability of
            smart contracts, we implement robust security measures, including:
          </Typography>
        </div>
        <Grid
          container
          spacing={4}
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "5px",
            marginTop: "20px",
          }}
        >
          <Grid item>
            <Card className={classes.card}>
              <CardContent
                className={classes.content}
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <Typography className={classes.cardhead}>
                    Blockchain Technology
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Smart contracts are executed on a decentralized blockchain
                    network, where transaction data is stored across multiple
                    nodes, making it virtually impossible to alter or
                    manipulate. By leveraging blockchain technology, we ensure
                    the immutability and transparency of contract execution.
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardContent
                className={classes.content}
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <Typography className={classes.cardhead}>
                    Encryption
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Smart contracts and transaction data are encrypted using
                    advanced cryptographic techniques, protecting sensitive
                    information from unauthorized access and tampering. By
                    implementing strong encryption standards, we safeguard the
                    confidentiality and integrity of user data.
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardContent
                className={classes.content}
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <Typography className={classes.cardhead}>
                    Auditing and Monitoring
                  </Typography>
                  <Typography variant="body1" paragraph>
                    We conduct regular audits and monitoring of smart contracts
                    to detect and prevent potential vulnerabilities or
                    anomalies. By proactively monitoring contract execution and
                    performance, we ensure the reliability and security of our
                    platform.
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      
      <div className={classes.section}>
        <div className={classes.sectionhead}>
          <Typography variant="h4">Summary</Typography>
          <Typography variant="body1" style={{ marginTop: "12px" }}>
            In summary, smart contracts are a cornerstone of our platform,
            enabling efficient, transparent, and secure agreement settlement for
            filmmakers and industry professionals. By harnessing the power of
            smart contracts, we empower users to collaborate, transact, and
            innovate with confidence on myreeldream.ai. Welcome to the future of
            filmmaking, where technology meets creativity, and agreements are
            made simple.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default SmartContracts;
