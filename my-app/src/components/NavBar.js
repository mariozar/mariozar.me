import React from 'react';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// const defaultTheme = createMuiTheme();
// const style = {
//   background: 'linear-gradient(45deg, #3757D4 40%, white 90%)',
//   borderRadius: 0,
//   border: 0,
//   color: 'white',
//   height: 48,
//   padding: '0 0px',
//   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
// };

const style = {
  background: '#3757D4',
};

const NavBar = () => {
    return(
        <div>
        <AppBar position="static" style={style} >
            <Toolbar>
                <Typography variant="title" color="inherit">
                Mario Salazar
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;
