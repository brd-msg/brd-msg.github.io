import React, { Fragment, useState } from "react";
import { DateTimePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {

    padding: '0.2rem 1rem',

  },
  textField: {
    // border: 2,
    // color: 'white',
    height: 100,
    // padding: '0.2rem 1rem'
    color: 'white',
    '& :-webkit-autofill': {
      '-webkit-text-fill-color': 'white',
      '-webkit-box-shadow': '0 0 0px 1000px #434343 inset',
    },
    // maxWidth: 400,

  },
  button: {
    padding: '15px',
  },
  datePicker: {
    padding: '15px',
  },

}));


function BasicDatePicker(props) {
  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Fragment>
        <DateTimePicker
          className={classes.button}
          label="Data wizyty"
          inputVariant="outlined"
          value={selectedDate}
          onChange={handleDateChange}
          disablePast="true"
          showTodayButton="true"
          name='Data wizyty'

        />

        {/* <DateTimePicker
          autoOk
          ampm={false}
          disableFuture
          value={selectedDate}
          onChange={handleDateChange}
          label="24h clock"
        />

        <DateTimePicker
          value={selectedDate}
          disablePast
          onChange={handleDateChange}
          label="With Today Button"
          showTodayButton
        /> */}
      </Fragment>
    </MuiPickersUtilsProvider >
  );
}

export default BasicDatePicker;
