import React, { Component } from 'react';
import NavBar from './components/NavBar';
//import Resume from './components/Resume';
import Terminal from 'terminal-in-react';

class App extends Component {
  render() {
    return (
      <div >
        <NavBar />
        <Terminal
          color='white'
          backgroundColor='#515151'
          backgroundColor='#333333'
          barColor='black'
          prompt='white'
          hideTopBar='true'
          startState='maximised'
          style={{ fontWeight: "bold", fontSize: "1em", height: "100vh"}}
          commands={{
            'open-google': () => window.open('https://www.google.com/', '_blank'),
            showmsg: this.showMsg,
            popup: () => alert('Terminal in React')
          }}
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          msg='Welcome!'
        />
      </div>
    );
  }
}

export default App;
