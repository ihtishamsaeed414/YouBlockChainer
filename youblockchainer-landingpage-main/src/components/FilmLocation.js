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
    height: "350px",
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
    padding: "10px",
    background: "linear-gradient(91.97deg, #002638 -39.63%, #3770FF 110.12%)",
    cursor: "pointer",
  },
  cardhead: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
  sectionhead: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    display: "flex ",
    justifyContent: "center",
  },
  section: { marginTop: "100px" },
  title: {
    fontSize: "44px",
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
      fontWeight:'bold',
  },
  content:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'',
    justifyItems:'',
    // border:'2px solid red',
    height:'100%',
  }
}));

const FilmLocation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h1" className={classes.title}>
          Filming Locations
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography variant="h5" className={classes.sectionhead}>
          Information about Exotic Filming Locations Available
        </Typography>
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
              <CardContent className={classes.content} style={{justifyContent:'space-between'}}>
                <div>
                <Typography className={classes.cardhead}>
                  Locations Hub
                </Typography>
                <Typography variant="body1" paragraph>
                  Locations Hub is a platform that provides access to a wide
                  range of filming locations worldwide, including exotic and
                  picturesque settings suitable for various types of
                  productions.
                </Typography>

                </div>
<div>
                <Button
                  href="https://www.locationshub.com/"
                  target="_blank"
                  rel="noopener"
                  className={classes.button}
                >
                  Locations Hub
                </Button>

</div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardContent className={classes.content} style={{justifyContent:'space-between'}}>
                <div>

                <Typography className={classes.cardhead}>
                  The Location Guide
                </Typography>
                <Typography variant="body1" paragraph>
                  The Location Guide offers a comprehensive directory of filming
                  locations and production services around the world, including
                  exotic destinations and unique settings for filmmakers.
                </Typography>
                </div>
                <div>
                <Button
                  href="https://www.thelocationguide.com/"
                  target="_blank"
                  rel="noopener"
                  className={classes.button}
                >
                  The Location Guide
                </Button>

                </div>

              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardContent className={classes.content} style={{justifyContent:'space-between'}}>
                <div>

                <Typography className={classes.cardhead}>
                  Film Commission
                </Typography>
                <Typography variant="body1" paragraph>
                  Many film commissions and tourism boards provide information
                  about filming locations in their respective regions,
                  highlighting exotic landscapes, historical sites, and cultural
                  landmarks.
                </Typography>
                </div>
                <div>

                <Button
                  href="https://www.maltafilmcommission.com/"
                  target="_blank"
                  rel="noopener"
                  className={classes.button}
                >
                  Malta Film Commission
                </Button>

                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <div className={classes.section}>
        <Typography variant="h5" className={classes.sectionhead}>
          Collaborative Platforms and Studio Facilities in Malta and Gozo
        </Typography>
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
              <CardContent className={classes.content} style={{justifyContent:'space-between'}}>
                <div>
                <Typography className={classes.cardhead}>
                  Malta Film Studios
                </Typography>
                <Typography variant="body1" paragraph>
                  The Malta Film Studios offers state-of-the-art facilities and
                  services for film and television productions, including sound
                  stages, water tanks, and production offices
                </Typography>

                </div>
                <div>

                <Button
                  href="https://www.maltafilmstudios.com/"
                  target="_blank"
                  rel="noopener"
                  className={classes.button}
                >
                  Malta Film Studios
                </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardContent className={classes.content} style={{justifyContent:'space-between'}}>
                <div>
                <Typography className={classes.cardhead}>
                  Malta Film Commission
                </Typography>
                <Typography variant="body1" paragraph>
                  The Malta Film Commission provides information about filming
                  in Malta and Gozo, including details about studio facilities,
                  production services, and incentives for filmmakers
                </Typography>

                </div>
<div>

                <Button
                  href="https://www.maltafilmcommission.com/"
                  target="_blank"
                  rel="noopener"
                  className={classes.button}
                >
                  Malta Film Commission
                </Button>
</div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardContent className={classes.content} style={{justifyContent:'space-between'}}>
                <div>

                <Typography className={classes.cardhead}>
                  Film Location Services
                </Typography>
                <Typography variant="body1" paragraph>
                  The Film Location Services Malta offers a range of production
                  support services, including location scouting, permits, and
                  studio rentals, to facilitate filming in Malta and Gozo
                </Typography>
                </div>
                <div>

                <Button
                  href="https://www.filmingmalta.com/"
                  target="_blank"
                  rel="noopener"
                  className={classes.button}
                >
                  Film Location Services Malta
                </Button>

                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <div className={classes.section}>
        <Typography variant="h5" className={classes.sectionhead}>
          Photo Galleries Showcasing Potential Shooting Locations
        </Typography>
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
              <CardContent className={classes.content} style={{justifyContent:'space-between'}}>
                <div>
                <Typography className={classes.cardhead}>
                  Film Locations
                </Typography>
                <Typography variant="body1" paragraph>
                  Various websites and platforms feature photo galleries
                  showcasing potential shooting locations in Malta and Gozo,
                  highlighting the islands' diverse landscapes, historic sites,
                  and architectural landmarks
                </Typography>

                </div>
                <div>

                <Button
                  href="https://www.filmingmalta.com/locations/"
                  target="_blank"
                  rel="noopener"
                  className={classes.button}
                >
                  Locations in Malta and Gozo
                </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardContent className={classes.content} style={{justifyContent:'space-between'}}>
                <div>
                <Typography className={classes.cardhead}>
                  Getty Images
                </Typography>
                <Typography variant="body1" paragraph>
                  Getty Images offers a vast collection of high-quality stock
                  photos and footage, including images of exotic and picturesque
                  locations suitable for filming
                </Typography>

                </div>
                <div>

                <Button
                  href="https://www.gettyimages.com/"
                  target="_blank"
                  rel="noopener"
                  className={classes.button}
                >
                  Getty Images
                </Button>

                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardContent className={classes.content} style={{justifyContent:'space-between'}}>
                <div>

                <Typography className={classes.cardhead}>Unsplash</Typography>
                <Typography variant="body1" paragraph>
                  Unsplash is a platform that provides free high-resolution
                  photos contributed by photographers worldwide, including
                  images of scenic landscapes and unique locations ideal for
                  film and television productions
                </Typography>

                </div>
                <div>

                <Button
                  href="https://www.unsplash.com/"
                  target="_blank"
                  rel="noopener"
                  className={classes.button}
                >
                 Unsplash
                </Button>

                </div>
              </CardContent>
            </Card>
          </Grid>
          
        </Grid>
      </div>
    </div>
  );
};

export default FilmLocation;
