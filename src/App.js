import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router';
import logo from './logo.svg';
import './App.css';
import './Main'
import './Info'

const TOKEN = '6c0c200982141ec5caedb47e6f71349c8d6e582f';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Route exact path='/' component={Main} />
                    <Route path='/search/query?page' component={Main} />
                    <Route path='/about/:username' component={Info} />
                </div>
            </HashRouter>
        );
    }
}

export default App;