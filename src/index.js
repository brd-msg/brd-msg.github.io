import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router  } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      // light: will be calculated from palette.primary.main,
      light:'#2196f3',
      main: '#d2a663',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: '#0066ff',
      light:'#388e3c',
      main: '#434343',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#ffcc00',
    },
 
    // common:{

    //   main:'white'
    // }
  },

  overrides: {
    MuiInputBase: {
        root: {
            backgroundColor: 'secondary',
            fontSize: 16,
            width: '310px',
            maxWidth: '80vw'
        },
    }
} 

});



ReactDOM.render(
  <Router>
    
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
  </Router>,
  document.getElementById('root'),
  
);


