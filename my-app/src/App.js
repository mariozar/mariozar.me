import React, { Component } from 'react';
import NavBar from './components/NavBar';
//import Resume from './components/Resume';
import Terminal from 'terminal-in-react';
// backgroundColor='#515151'
// backgroundColor='#333333'

class App extends Component {

  render() {
    return (
      <div >
        <NavBar />
        <Terminal
          color='#3757D4'
          outputColor='#3757D4'
          backgroundColor='white'
          barColor='black'
          prompt='#3757D4'
          hideTopBar='true'
          startState='maximised'
          style={{ fontWeight: "bold", fontSize: "1em", height: "100vh"}}
          commands={{
            resume: () => { window.open('https://1drv.ms/b/s!AgRDXx2TKkRhj-AzWDfFkDPg4YEsZw'); },
            github: () => { window.open('https://github.com/mariozar'); },
            linkedin: () => { window.open('https://www.linkedin.com/in/mariozar/'); }
          }}
          descriptions={{
            resume: 'links to resume',
            github: 'links to GitHub',
            linkedin: 'links to LinkedIn',
          }}
          msg= "Type 'help' for a list of commands"
        />
      </div>
    );
  }
}

export default App;
