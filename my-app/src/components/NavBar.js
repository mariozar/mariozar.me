import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const defaultTheme = createMuiTheme();

const NavBar = () => {
    return(
        <div>
        <AppBar position="static" >
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
