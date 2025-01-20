import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import { Icon } from "@iconify/react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    color: "#ffffff",
    borderRadius: theme.spacing(12),
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease",
    "&:hover": {
      boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.5)",
    },
    width: "300px",
    height: "470px",
    justifyContent: "center",
    paddingLeft: "10px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
  price: {
    fontSize: "36px",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: "yellow",
  },
  featureList: {
    marginTop: theme.spacing(1),
  },
  feature: {
    fontSize: "14px",
    marginBottom: theme.spacing(0.5),
    display: "flex",
    alignItems: "center",
    marginTop: "8px",
  },
  modal: {
    backgroundColor: "#002638", opacity: "1",
    position: "absolute",
    width: "90%",
    overflowY: "auto", // Enable vertical scrollbar
    maxWidth: "600px", // Adjust maximum width as needed
    maxHeight: "90vh", // Adjust maximum height as needed
    // backgroundColor: theme.palette.background.paper,
    // border: "2px solid yellow",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },

  },
}));

function Pricing() {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleOpenModal = (plan) => {
    setSelectedPlan(plan);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const plans = [
    {
      title: "Aspiring Talent",
      features: [
        "Idea to one minute pitch",
        "One minute pitch to synopsis",
        "Synopsis to full length script",
        "Story board",
        "Script doctors",
      ],
      buttonLabel: "Try For Free",
      Icon: "eva:bulb-outline",
      description: " ",
    },
    {
      title: "Movie Professionals",
      price: 20,
      features: [
        "Casting",
        "Location scouting",
        "Production schedule",
        "Designing sets & costumes",
        "Filming on location/studio",
      ],
      buttonLabel: "Subscribe Now",
      Icon: "mdi:movie-edit",
    },
    {
      title: "Co-operation",
      price: 40,
      features: [
        "Film editing",
        "Marketing",
        "Distribution",
        "Release",
        "Post-release",
      ],
      buttonLabel: "Buy Now",
      Icon: "ri:movie-2-line",
    },
  ];

  return (
    <section id='pricing'>

    <div className={classes.root}>
      <Grid
        container
        spacing={4}
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          padding: "5px",
        }}
      >
        {plans.map((plan) => (
          <Grid item key={plan.title}>
            <Card
              className={classes.card}
              style={{ backgroundColor: "#002638", opacity: "0.9" }}
              onClick={() => handleOpenModal(plan)}
            >
              <CardContent>
                <Typography className={classes.title}>{plan.title}</Typography>
                <Icon
                  icon={plan.Icon}
                  style={{ fontSize: "100px", color: "yellow" }}
                />
                <div style={{ paddingTop: "12px" }}>
                  <Typography
                    style={{
                      fontSize: "20px",
                      fontFamily:
                        'Jost, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                      fontWeight: 700,
                      fontSize: "26px",
                      lineHeight: "40px",
                      color: "#ffffff",
                    }}
                  >
                    Features
                  </Typography>
                </div>
                <div className={classes.featureList}>
                  {plan.features.map((feature, index) => (
                    <Typography key={index} className={classes.feature}>
                      <span role="img" aria-label="Checkmark">
                        ✔️
                      </span>
                      <span style={{ marginLeft: "4px" }}>{feature}</span>
                    </Typography>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className={classes.modal}>
          {selectedPlan && (
            <div style={{
              // fontSize: "20px",
              
            }}>
              <div style={{ display: "flex", justifyContent: "space-between",fontFamily:
                'Jost, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                            color: "yellow", }}>
                <Typography variant="h6" id="modal-title" style={{fontSize:'30px',font:'bold', fontWeight:700}}>
                  {selectedPlan.title}
                </Typography>
                <Button onClick={handleCloseModal} style={{fontSize:'20px',font:'bold', fontWeight:700, color:'red'}}>X</Button>
              </div>

              <Typography
                variant="body1"
                id="modal-description"
                style={{
                  width: "100%",
                  // border: "1px solid",
                }}
              >
               <span style={{fontSize:'22px',font:'bold', fontWeight:700,fontFamily:
                'Jost, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                            color: "#ffffff",}}>
                 Additional Ideas: -<br/>
                </span>
                <Typography style={{fontFamily:
                'Jost, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                            color: "#ffffff", opacity:'0.7',}}>

                 Consider incorporating interactive elements
                such as sliders or tabs that users can click through to learn
                more about each target audience. - Utilize clear call-to-action
                buttons or links that direct users to specific sections or
                sign-up forms based on their interests. - Incorporate visually
                appealing graphics or icons to represent each target audience,
                making it easy for users to identify which category they belong
                to. - Implement a user-friendly navigation menu that allows
                visitors to easily access information relevant to their needs,
                whether they're aspiring talents, movie professionals, or
                corporations. - Provide options for users to subscribe to
                newsletters or updates tailored to their specific interests,
                ensuring they stay informed about relevant opportunities and
                developments within the myreeldream.ai community. - Introduction
                to myreeldream.ai Have you ever pondered the possibilities of
                combining artificial intelligence, text-to-video technologies,
                and smart contracts? Welcome to the future of filmmaking with
                myreeldream.ai ! Imagine a platform that empowers anyone,
                whether you're bursting with ideas or starting from scratch, to
                become a filmmaker. That's what myreeldream.ai does. Reflecting
                on the dynamic evolution of the entertainment industry. we find
                parallels with shifts in film and music. In the past two
                decades, from Napster and iTunes to YouTube and now streaming
                giants like Netflix, new business models have emerged. Today, a
                creative Youtuber can reach or even surpass the audience of a
                traditional TV broadcaster with just a few Clicks. While
                producing movies or series traditionally demands substantial
                investments. Al, Text-to-Video, and web three technologies
                converge on myreeldream, enabling you to be your own movie
                producer effortlessly, and at a very low cost. In just a few
                clicks, it generates a one-minute pitch, a synopsis, a
                full-length script with a storyboard, and even a trailer. It's
                like having a personal assistant, but this assistant is powered
                by cutting-edge AI technology and available 24/7. But that's not
                all. Myreeldream.ai is more than just a tool; it's a community.
                Here, you can connect with movie professionals who can provide
                valuable insights to improve your script and compose your
                soundtrack for instance. Smart contracts enable you to settle
                agreements with third parties in a few clicks, securely and
                transparently by recording them on a blockchain where
                information cannot be tampered with. In other words, avoid
                potential legal conflicts! But it's also a place where you can
                find audition opportunities to act in a movie, a series, or a
                short reel. It's a platform that brings together novices and
                experts, dreamers, and doers, under one digital roof. Now, let's
                talk about location. Are you coming to Malta's islands to learn
                a language, or just to enjoy life? Ever dreamt of shooting part
                of your movie in exotic locations? Myreeldream.ai can make that
                dream come true. With access to collaborative platforms, and
                studio facilities in Malta and Gozo, your script can come alive
                in breathtaking settings. And the cherry on top? Myreeldream.ai
                isn't just about creating; it's about showcasing too. Once your
                movie is ready, you can broadcast it on the platform. And every
                year, there will be our annual hybrid AI-Human movie festival
                held in the beautiful facilities of Malta and Gozo. It's a
                chance to celebrate the fusion of human creativity and
                artificial intelligence in the world of filmmaking. In essence,
                myreeldream.ai is a comprehensive, user-friendly platform that
                brings together AI, text-to-video technologies, and smart
                contracts. It provides an opportunity for anyone to generate a
                movie pitch, connect with professionals, find auditions, shoot
                in exotic locations, and broadcast their work. Plus, it offers
                the unique experience of participating in an annual hybrid
                AI-Human movie festival. In essence, myreeldream.ai is a
                comprehensive, user-friendly platform that opens the doors to
                filmmaking for everyone!
                </Typography>
              </Typography>
            </div>
          )}
        </div>
      </Modal>
    </div>
    </section>
  );
}

export default Pricing;