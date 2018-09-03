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
  background: 'black',
};

const styleG = {
  color: '#00A1F1',
};

const styleo1 = {
  color: '#F65314',
};

const styleo2 = {
  color: '#FFBB00',
};

const styleg = {
  color: '#00A1F1',
};

const stylel = {
  color: '#7CBB00',
};

const stylee = {
  color: '#F65314',
};

const stylehacker = {
  color: 'green',
};

const styleusmc = {
  color: '#C33735',
};

const styleucr1 = {
  color: '#F4B943',
};

const styleucr2 = {
  color: '#2E74B5',
};

const styleBar = {
  color: '#333333',
};

const NavBar = () => {
  return(
      <div>
      <AppBar position="static" style={style}>
          <Toolbar>
              <Typography variant="title" color="inherit">
              Mario Salazar ◍
               <span style={styleG}> G</span><span style={styleo1}>o</span><span style={styleo2}>o</span><span style={styleg}>g</span><span style={stylel}>l</span><span style={stylee}>e</span> Scholar ○
              US Marine ◌ Undergraduate Researcher ● Hacker
              </Typography>
          </Toolbar>
      </AppBar>
      </div>
  );
}

export default NavBar;
