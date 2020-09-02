import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {ReactComponent as Image} from './Images/undraw_code_review_l1q9.svg';
import useWebAnimations from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
  screenDiv: {
    backgroundImage: "linear-gradient(-60deg,#4b06c1,#ce02bd)",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    maxWidth: '100%'
  },
  screen3: {
    backgroundImage: "linear-gradient(-60deg,#5F0A87, #A4508B)",
    backgroundSize: "100%",
    top: 0,
    width: "100%",
    height: "100%",
    fontFamily: "'Montserrat', sans-serif",
    color: "white",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  typoDiv: {
    margin: 50,
    width: 600,
    padding: 20,
    paddingLeft: 30
  },
  typo1: {
    fontWeight: 500,
    fontSize: "50px",
    marginBottom: 70
  },
  typo2: {
    fontSize: "16px",
    fontWeight: 100,
    marginTop: "-46px",
  },
  list: {
    fontSize: "16px",
    fontWeight: 400,
    marginTop: 50,
    display: "inline",
    marginRight: 30,
    lineHeight: 3,
    textDecoration: "dotted",
  },
  image: {
    height: 400,
    width: 500,
    margin: "auto",
    marginTop: 80,
    padding: 50
  },
}));

export const Display3 = () => {
  const classes = useStyles();
  const { ref, getAnimation} = useWebAnimations({ 
    playbackRate: 0.5, 
    autoPlay: false,

    keyframes: [
        
      {transform: "translate(0,0)"},
      {transform: "translate(0,20px)"},
      {transform: "translate(0,0)"},
    ],  
    timing: {
      duration: 600, 
      iterations: 1, 
      direction: "alternate",
      easing: "ease-in-out", 
    },
  });


const play =  ()=>{
  getAnimation().play();
}


  return (
    <div className={classes.screenDiv} >
    <div className={classes.screen3}>
      <div className={classes.typoDiv}>
        <Typography className={classes.typo1}> Website Copywriting </Typography>
        <Typography className={classes.typo2}> 
        Your website is a dialogue with your audience. I capture the essence of your business and communicate it clearly. Carefully considered writing and SEO best practices allow me to craft the perfect user journey online. Let me draw the map that guides users every step of the way from discovery, to consideration, to conversion.
        </Typography>
        <ul >
            <li className={classes.list} >Information Architecture</li>
            <li className={classes.list}>Wireframes</li>
            <li className={classes.list}>Competitor Analysis</li>
            <li className={classes.list} >On-page SEO</li>
            <li className={classes.list}>Off-page SEO</li>
            <li className={classes.list}>USP/UVP</li>
            <li className={classes.list}>Landing Page</li>
            <li className={classes.list}>Sales Letter</li>
        </ul>
      </div>
      <div ref={ref} onMouseOver={play}>
        <Image className={classes.image} />
      </div>
    </div>
    </div>
  );
};