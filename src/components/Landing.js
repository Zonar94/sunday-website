import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Iframe from 'react-iframe'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';




export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>


      {/* Hero unit */}
      <Container maxWidth="lg" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="white" gutterBottom>
            <p></p>
            Realistic SkaterXL
        </Typography>
        <Typography variant="h5" align="center" paragraph>
        Welcome to my Realistic SkaterXL website. I post all of my SKATERXL edits over here 
                    and share editing process<p></p>
            <div className="video">
                    <Iframe className="video1" url="https://www.youtube.com/embed/kwHzfj15Z78"
                        frameBorder="0"
                        width="1000px"
                        height="280px"
                        id="myId"
                        /*display="initial"*/
                        /*position="right"*/ />
                </div>
            </Typography>
      </Container>
      {/* End hero unit */}
  
      <div className={classes.root}>
                <Container maxWidth="lg">
      <h3 className="center">APPLEWOOD PARK</h3>
      <Grid container spacing={3}>
        <Grid item xs>
        <img
                    src="./images/thumb1.png"
                    width="350px"
                    height="200px"
                    className="d-inline-block align-top"
                    alt="enorm"
                />
        </Grid>
        <Grid item xs>
        <img
                    src="./images/thumb2.png"
                    width="350px"
                    height="199.5px"
                    className="d-inline-block align-top"
                    alt="enorm"
                />
        </Grid>
        <Grid item xs>

        <img
                    src="./images/thumb5.png"
                    width="350px"
                    height="200px"
                    className="d-inline-block align-top"
                    alt="enorm"
                />
        </Grid>
      </Grid>
      <h3 className="center">MALSBURRY PARK</h3>
      <Grid container spacing={3}>
        <Grid item xs>
        <img
                    src="./images/thumb4.png"
                    width="350px"
                    height="200px"
                    className="d-inline-block align-top"
                    alt="enorm"
                />
        </Grid>
        <Grid item xs>
        <img
                    src="./images/thumb3.png"
                    width="350px"
                    height="200px"
                    className="d-inline-block align-top"
                    alt="enorm"
                />
        </Grid>
        <Grid item xs>
                <img
                    src="./images/thumb6.png"
                    width="350px"
                    height="200px"
                    className="d-inline-block align-top"
                    alt="enorm"
                />
        </Grid>
      </Grid>
            </Container>
      
    </div>

    </React.Fragment>
  );
}