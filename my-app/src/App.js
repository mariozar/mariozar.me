import React, { Component } from 'react';
import NavBar from './components/NavBar';
//import Resume from './components/Resume';
import Terminal from 'terminal-in-react';

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3757D4',
    },
    secondary: {
      main: '#333333',
    },
  },
});
// backgroundColor='#515151'
// backgroundColor='#333333'

class App extends Component {
  render() {
    return (
      <div >
        <NavBar theme={theme} />
        <Terminal
          color='white'
          outputColor='white'
          backgroundColor='#5b5b5b'
          prompt='#ff3d00'
          hideTopBar='true'
          startState='maximised'
          allowTabs='false'
          style={{ fontWeight: "bold", fontSize: "1em", height: "100vh"}}
          commands={{
            resume: () => { window.open('https://1drv.ms/b/s!AgRDXx2TKkRhj-AzWDfFkDPg4YEsZw'); },
            github: () => { window.open('https://github.com/mariozar'); },
            linkedin: () => { window.open('https://www.linkedin.com/in/mariozar/'); },
            goals: () => "Learn React JS\nLearn Tensorflow\nLearn Django\nBuild custom Android builds\nRefine Python\nRefine C/C++\nContribute to open source NodeJS projects\nContribute to open source Linux distributions",
            '10years': () => "In 10 years I want to be at an executive level within a company and gaining knowledge/experience to take the next step. I firmly believe that people should never stop learning and I strive for that every day.",
            // curiousities: () => "I am very interested in"
            projects: () => "This website :)\nCommunity identification with Tensor Decomposition\nTensorflow beginner projects\nSurvival utilities cell phone",
            volunteer: () => "Outreach Director - Cyber@UCR\nFormer Director of Sponsorship/Operations - Citrus Hack 2017",
            toolkit: () => "Programming: C/C++, Java, Python, Matlab, Javascript, HTML/CSS, x86 assembly\nCoursework: Algorithms & Data Structures, Design Patterns, Computer Security/Networks, Prallel Programming, Compilers, Operating Systems\nWork-related: FIPS 140-2 compliant encryption and hashing functions, IoT devices with ThreadX RTOS and TrustZone building and development"
          }}
          descriptions={{
            resume: 'links to resume',
            github: 'links to GitHub',
            linkedin: 'links to LinkedIn',
            internships: 'lists companies where I have had internships',
            goals: 'lists my current short-term goals',
            '10years': 'lists my plans for the next 10 years',
            // curiousities: 'lists my areas of interest for research or hobbies',
            projects: 'lists my current projects/things that I am learning outside of school',
            volunteer: 'lists volunteer positions/events that I participate in',
            toolkit: 'lists things that I am confident in'
          }}
          msg= "Type 'help' for a list of commands"
        />
      </div>
    );
  }
}

export default App;
