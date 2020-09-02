import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {ReactComponent as Image} from './Images/undraw_design_tools_42tf.svg';
import useWebAnimations from "@wellyshen/use-web-animations"

const useStyles = makeStyles((theme) => ({
  screenDiv: {
    backgroundImage: "linear-gradient(-60deg,#4b06c1,#ce02bd)",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    maxWidth: '100%'
  },
  screen2: {
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
    width: 500,
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
    textDecoration: "dotted"
  },
  image: {
    height: 400,
    width: 500,
    margin: "auto",
    marginTop: 80,
    padding: 50
  },
}));

export const Display2 = () => {
  const classes = useStyles();
  const { ref, playState, getAnimation} = useWebAnimations({ 
    playbackRate: 0.5, 
    autoPlay: false,
    keyframes: [
        
      {transform: "translate(0,0)"},
      {transform: "translate(15px,0)"},
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
  console.log(getAnimation())


  return (
    <div className={classes.screenDiv}>
    <div className={classes.screen2}>
      <div ref={ref}>
        <Image className={classes.image} onMouseOver={play} />
      </div>
      <div className={classes.typoDiv}>
        <Typography className={classes.typo1}> UX WRITING </Typography>
        <Typography className={classes.typo2}> I develop clear and useful text in product interfaces to help users reach a specific goal, whether that's completing a form or tapping a button. This includes every type of content from on-screen help systems, user onboarding and in-app messages to push notifications and tooltips. </Typography>
        <ul >
            <li className={classes.list} >Microcopy</li>
            <li className={classes.list}>Taxonomy & Labeling</li>
            <li className={classes.list}>Chatbots</li>
            <li className={classes.list} >User Research</li>
            <li className={classes.list}>Content Style Guide</li>
            <li className={classes.list}>User Testing</li>
            <li className={classes.list}>Design Principles</li>
            <li className={classes.list}>Prototype</li>
        </ul>
      </div>
    </div>
    </div>
  );
};