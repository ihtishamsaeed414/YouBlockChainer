import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
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
    width: "310px",
    height: "380px",
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

const Festival = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{backgroundColor:'gray', }}>
      <div>
        <Typography variant="h1" className={classes.title}>
          Annual Movie Festival
        </Typography>
      </div>
      <div className={classes.section} >
        <Typography variant="h5" className={classes.sectionhead}>
          Overview of the Hybrid AI-Human Movie Festival
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
                    Sundance Film Festival
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Sundance offers a comprehensive overview of their festival,
                    including information about their hybrid approach, which
                    combines in-person and virtual screenings, as well as
                    details about the lineup, special events, and industry
                    initiatives
                  </Typography>
                </div>
                <div>
                  <Button
                    href="https://www.sundance.org/festivals/sundance-film-festival"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    Sundance Film Festival
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
                    Tribeca Film Festival
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Tribeca provides insights into their hybrid festival model,
                    featuring a diverse range of film screenings, panels, and
                    interactive experiences, along with opportunities for
                    networking and collaboration
                  </Typography>
                </div>
                <div>
                  <Button
                    href="https://www.tribecafilm.com/festival/"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    Tribeca Film Festival
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
                    Cannes Film Festival
                  </Typography>
                  <Typography variant="body1" paragraph>
                    - Cannes showcases its prestigious festival program,
                    featuring a blend of AI-curated selections and human-curated
                    films, as well as information about their iconic red carpet
                    premieres, jury awards, and industry showcases
                  </Typography>
                </div>
                <div>
                  <Button
                    href="https://www.festival-cannes.com/en/"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    Cannes Film Festival
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <div className={classes.section}>
        <Typography variant="h5" className={classes.sectionhead}>
          Submission Guidelines for Filmmakers
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
                    Film Freeway
                  </Typography>
                  <Typography variant="body1" paragraph>
                    FilmFreeway offers a platform for filmmakers to submit their
                    films to festivals worldwide, including guidelines for
                    submission, deadlines, and fees, as well as information
                    about eligibility criteria and selection criteria
                  </Typography>
                </div>
                <div>
                  <Button
                    href="https://www.filmfreeway.com/"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    FilmFreeway
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
                    Without a box
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Withoutabox provides a comprehensive submission platform for
                    filmmakers, featuring guidelines for submitting to
                    festivals, including information about required materials,
                    formats, and deadlines
                  </Typography>
                </div>
                <div>
                  <Button
                    href="https://www.Withoutabox.com/"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    Without a box
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
                    Festival Websites
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Many festival websites offer detailed submission guidelines
                    for filmmakers, including information about entry
                    requirements, categories, and selection criteria. Examples
                    include:
                  </Typography>
                </div>
                <div>
                  <Button
                    href="https://www.berlinale.de/en/submissions/submissions/"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    Berlinale Submission Guidelines
                  </Button>
                  <Button
                    href="https://www.tiff.net/festival/submissions/"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    TIFF Submission Guidelines
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <div className={classes.section}>
        <Typography variant="h5" className={classes.sectionhead}>
          Schedule of Events and Screenings
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
                    SXSW Film Festival
                  </Typography>
                  <Typography variant="body1" paragraph>
                    - SXSW provides a detailed schedule of film screenings,
                    panels, workshops, and special events, allowing attendees to
                    plan their festival experience and navigate the program
                    effectively
                  </Typography>
                </div>
                <div>
                  <Button
                    href="https://www.sxsw.com/festivals/film/)"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    SXSW Film Festival
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
                    London Film Festival
                  </Typography>
                  <Typography variant="body1" paragraph>
                    The BFI London Film Festival offers a comprehensive schedule
                    of screenings, events, and industry sessions, featuring a
                    diverse range of films from around the world
                  </Typography>
                </div>
                <div>
                  <Button
                    href="https://www.bfi.org.uk/london-film-festival/"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    BFI London Film Festival
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
                    Venice Film Festival{" "}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    - The Venice Film Festival showcases its program of
                    screenings, premieres, and special events, featuring a mix
                    of AI-curated selections and human-curated films, along with
                    information about ticketing and accreditation
                  </Typography>
                </div>
                <div>
                  <Button
                    href="https://www.labiennale.org/en/cinema/"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    Venice Film Festival
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <div className={classes.section}>
        <Typography variant="h5" className={classes.sectionhead}>
          Past Festival Highlights and Winners
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
                  <Typography className={classes.cardhead}>IMDb</Typography>
                  <Typography variant="body1" paragraph>
                    IMDb offers a database of past festival winners and
                    highlights, including information about award-winning films,
                    directors, actors, and industry achievements
                  </Typography>
                </div>
                <div>
                  <Button
                    href="https://www.imdb.com/awards-central/film-festivals/)"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    IMDb Festival Winners
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
                    Festival Archives
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Many festival websites maintain archives of past editions,
                    featuring information about previous winners, screenings,
                    and special events. Examples include:
                  </Typography>
                </div>
                <div>
                  <Button
                    href="https://www.sundance.org/programs/archives/"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    Sundance Archive
                  </Button>
                  <Button
                    href="(https://www.festival-cannes.com/en/"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    Cannes Archive
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
                    Blogs and Reviews
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Film festival blogs and review websites often feature
                    coverage of past editions, including reviews of winning
                    films, interviews with filmmakers, and analysis of festival
                    trends. Examples include:
                  </Typography>
                </div>
                <div>
                  <Button
                    href="https://www.indiewire.com/c/festivals/"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    IndieWire Festival
                  </Button>
                  <Button
                    href="https://variety.com/v/film/festivals/"
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                  >
                    Variety Festival
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

export default Festival;
