import React, {Component} from 'react';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
class App extends Component {
    render() {
        return (
            <Router>
                <div className="">
                   <Route path="/login" component={LoginPage}/>
                   <Route exact path="/" component={HomePage}/>
                </div>

            </Router>
        );
    }
}

export default App;
