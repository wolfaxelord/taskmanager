import React from 'react';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';
import ConfigTextfield from './app/components/textfield/ConfigTextfield.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <ConfigTextfield className="ConfigTextfield" />
      </div>
    );
  }
}

export default App;

//ReactDOM.render(<textfield />, document.getElementById('root'));