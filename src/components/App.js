import React, { Component } from "react";

import webpackLogo from '../images/webpack-logo.svg'
import faceMaster from '../images/example.jpg'


import '../styles/index.scss'; //instead of App.css

class App extends Component {
    render() {
        return (
            <div>
                <h1>My React App!</h1>
                <img src={webpackLogo}/>
                <img src={faceMaster}/>
            </div>
        );
    }
}

export default App;