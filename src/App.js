import React from 'react';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';
import ConfigTextfield from 'app/components/textfield/ConfigTextfield.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <script src="./bundle.js"></script>
          <ConfigTextfield className="ConfigTextfield" />
      </div>
    );
  }
}

export default App;

// import path from 'path';
// import express from 'express';
// import webpack from 'webpack';
// import webpackMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware'; // This line
// import config from '../webpack.config.js';
//
// const app = express();
// const compiler = webpack(config);
//
// app.use(express.static(__dirname + '/dist'));
// app.use(webpackMiddleware(compiler));
// app.use(webpackHotMiddleware(compiler)); // And this line
// app.get('*', function response(req, res) {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// });
//
// app.listen(3000);