import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { GiFootprint, GiBackPain, GiCoconuts, GiFemaleLegs, GiSausage } from 'react-icons/gi'
// import { SiExpertsexchange } from 'react-icons/si'
import DatePicker from './DatePicker.js'
import LevelSlider from './LevelSlider.js';

const useStyles = makeStyles((theme) => ({
    root: {

        paddingTop: '0.2rem',

    },
    textField: {
        border: 2,
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


export default function ContactForm() {


    const [status, setStatus] = useState("");

    const [foot, setFoot] = useState(false)
    const [back, setBack] = useState(false)
    const [coconut, setCoconut] = useState(false)
    const [legs, setLegs] = useState(false)
    const [xxx, setXxx] = useState(false)




    const classes = useStyles();

    const handleDeleteClick = (ev) => {
        const form = ev.target;
        form.reset();
        setFoot(false)
        setLegs(false)
        setBack(false)
        setCoconut(false)
        setXxx(false)

    }

    const handleSubmitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus("SUCCESS");

            } else {
                setStatus("ERROR");
            }
        };
        xhr.send(data);
    }


    const handleChange = (event, value) => {

        if (value < 10) {
            setFoot(false)
            setLegs(false)
            setBack(false)
            setCoconut(false)
            setXxx(false)
            return
        } else if (value > 10 && value < 30){
            setFoot(true)
            setLegs(false)
            setBack(false)
            setCoconut(false)
            setXxx(false)
            return
        }else if (value > 30 && value < 48){
            setFoot(true)
            setLegs(true)
            setBack(false)
            setCoconut(false)
            setXxx(false)
            return
        }
        else if (value > 48 && value < 65){
            setFoot(true)
                setLegs(true)
                setBack(true)
                setCoconut(false)
                setXxx(false)
                return
        }
        else if (value > 65 && value < 100){
            setFoot(true)
            setLegs(true)
            setBack(true)
            setCoconut(true)
            setXxx(false)
            return
        }else if (value >=100 ){
            setFoot(true)
            setLegs(true)
            setBack(true)
            setCoconut(true)
            setXxx(true)
            return
        }
        else{
            return console.log('Error');
        }
      
    }

    return (
        <form
            onSubmit={handleSubmitForm}
            onReset={handleDeleteClick}
            value={3}
            action="https://formspree.io/f/mdopbyne"
            method="POST"
        >
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                // spacing={2}
                className={classes.root}

            >
                <div className='icons'>


                    {/* <Container maxWidth='lg' > */}
                    <GiFootprint className={foot ? 'ra-icon-foot-opn' : 'ra-icon'} />

                    <GiFemaleLegs className={legs ? 'ra-icon-legs-opn' : 'ra-icon'} />

                    <GiBackPain className={back ? 'ra-icon-back-opn' : 'ra-icon'} />

                    <GiCoconuts className={coconut ? 'ra-icon-coconut-opn' : 'ra-icon'} />

                    <GiSausage className={xxx ? 'ra-icon-x-opn' : 'ra-icon'} />
                    <LevelSlider
                        onChange={handleChange}

                    />
                    {/* </Container> */}

                </div>

                <DatePicker
                />


                <TextField
                    id="outlined-textarea"
                    label="WIADOMOŚĆ"
                    placeholder="Dodatkowe uwagi"
                    multiline
                    variant="outlined"
                    rows={4}
                    rowsMax={16}
                    type="text"
                    name="Informacje dodatkowe"

                />

                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">

                    <ButtonGroup disableElevation variant="outlined" size="large"
                        className={classes.button}
                    >
                        <Button
                            // variant="outlined"
                            color="error"
                            type="reset"
                            className={classes.button}
                            endIcon={<DeleteIcon>Usuń</DeleteIcon>}
                        // onClick={handleDeleteClick}
                        >
                            Clear
                    </Button>
                        <Button
                            // variant="outlined"
                            color="primary"
                            className={classes.button}
                            endIcon={<SendIcon>Wyślij</SendIcon>}
                            type="submit"
                            value="Send"
                        >
                            Send
                    </Button>

                    </ButtonGroup>

                </Grid>
                {status === "SUCCESS" && <p>Dziękujemy za zgłoszenie!</p>}
                {status === "ERROR" && <p>Uuuups! Coś poszło nie tak...</p>}
            </Grid>

        </form>
    );

}
