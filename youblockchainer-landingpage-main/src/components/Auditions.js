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
    fontWeight: "bold",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "",
    justifyItems: "",
    // border:'2px solid red',
    height: "100%",
  },
}));

const Auditions = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h1" className={classes.title}>
          Auditions
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography variant="h5" className={classes.sectionhead}>
          Listing of Current Audition Opportunities
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
              <CardContent
                className={classes.content}
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <Typography className={classes.cardhead}>
                    Backstage
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Backstage is a popular platform for actors to find audition
                    opportunities for film, TV, theater, and more. They offer a
                    comprehensive database of casting calls from around the
                    world
                  </Typography>
                </div>
                <div>
                  <Button
                    href="https://www.backstage.com/casting/"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    Backstage
                  </Button>
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
                    Casting Networks
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Casting Networks provides casting solutions for film, TV,
                    commercials, and theater productions. Actors can access
                    audition opportunities and submit their profiles directly to
                    casting directors
                  </Typography>
                </div>
                <div>
                  <Button
                    href="https://www.castingnetworks.com/"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    Casting Networks
                  </Button>
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
                  <Typography className={classes.cardhead}>Playbill</Typography>
                  <Typography variant="body1" paragraph>
                    Playbill offers casting notices for theater productions,
                    including Broadway, Off-Broadway, and regional theater.
                    Actors can search for auditions and view casting calls for
                    various stage productions
                  </Typography>
                </div>
                <div>
                  <Button
                    href="https://www.playbill.com/casting"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    Playbill
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <div className={classes.section}>
        <Typography variant="h5" className={classes.sectionhead}>
          Guidelines for Submitting Auditions
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
              <CardContent
                className={classes.content}
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <Typography className={classes.cardhead}>
                    Actor's Access
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Actor's Access provides resources and guidelines for actors
                    on how to submit auditions, create professional profiles,
                    and maximize their chances of success in the industry
                  </Typography>
                </div>
                <div>
                  <Button
                    href="https://www.actorsaccess.com/"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    Actor's Access
                  </Button>
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
                    Casting Workbook
                  </Typography>
                  <Typography variant="body1" paragraph>
                    - Casting Workbook offers tips and guidelines for actors on
                    how to prepare for auditions, create self-tapes, and
                    navigate the casting process effectively
                  </Typography>
                </div>
                <div>
                  <Button
                    href="https://castingworkbook.com/actors/resources/"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    Casting Workbook
                  </Button>
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
                    Backstage Advice
                  </Typography>
                  <Typography variant="body1" paragraph>
                    - Backstage offers articles and advice for actors on a wide
                    range of topics, including audition preparation, self-taping
                    techniques, and networking strategies
                  </Typography>
                </div>
                <div>
                  <Button
                    href="https://www.filmingmalta.com/"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    Backstage Advice
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <div className={classes.section}>
        <Typography variant="h5" className={classes.sectionhead}>
          Tips for Aspiring Actors
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
              <CardContent
                className={classes.content}
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <Typography className={classes.cardhead}>
                    Actors' Equity Association
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Actors' Equity Association provides resources and tips for
                    aspiring actors, including information on training programs,
                    union membership, and career development opportunities
                  </Typography>
                </div>
                <div>
                  <Button
                    href="https://www.actorsequity.org/"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    Actors' Equity Association
                  </Button>
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
                    Backstage Resources
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Backstage offers a wealth of resources and articles for
                    aspiring actors, covering topics such as audition tips,
                    resume building, and finding representation
                  </Typography>
                </div>
                <div>
                  <Button
                    href="https://www.backstage.com/resources/"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    Backstage Resources
                  </Button>
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
                  Casting Frontier Blog 
                    </Typography>
                  <Typography variant="body1" paragraph>
                    Unsplash is a platform that provides free high-resolution
                    photos contributed by photographers worldwide, including
                    images of scenic landscapes and unique locations ideal for
                    film and television productions
                  </Typography>
                </div>
                <div>
                  <Button
                    href="https://castingfrontier.com/blog/"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    Casting Frontier Blog 
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

export default Auditions;
