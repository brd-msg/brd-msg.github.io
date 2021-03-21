import React from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 280
  },
  margin: {
    height: theme.spacing(3),
  },
}));



const AirbnbSlider = withStyles({
  root: {
    color: '#d2a663',
    height: 3,
    padding: '13px 0',
    width: 280,
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#d2a663',
    border: '1px solid #d2a663',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#d2a663 0 2px 2px',
    '&:focus, &:hover, &$active': {
      // boxShadow: '#d2a663 0 2px 3px 1px',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 3,
    backgroundColor: '#d2a663b9',
  },
  rail: {
    color: '#2b2b2b',
    opacity: 1,
    height: 3,
  },
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      {/* <span className="bar" /> */}
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}


export default function CustomizedSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AirbnbSlider
        ThumbComponent={AirbnbThumbComponent}
        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
        value={props.value}
        // step={1}
        // min={0}
        // max={5}
        
        onChange={props.onChange}
        name={'MSG LEVEL'}
    
      />
    </div>
  );
}
