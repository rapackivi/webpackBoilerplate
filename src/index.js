// // Test import of a JavaScript function
// import {example} from './js/example'

// // Test import of an asset
// import webpackLogo from './images/webpack-logo.svg'

// // Test import of styles
// import './styles/index.scss'

// // Appending to the DOM
// const logo = document.createElement('img')
// logo.src = webpackLogo

// const heading = document.createElement('h1')
// heading.textContent = example()

// const app = document.querySelector('#root')
// app.append(logo, heading)

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";

ReactDOM.render(<App />, document.getElementById("root"));
