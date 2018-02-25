/**
 * Created by jiaow on 24/02/2018.
 */
/**
 * Created by jiaow on 24/02/2018.
 */
import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

class HomePage extends React.Component{
    render(){
        return(
            <div className="container">
                <h1>this is home page</h1>
                <Link to="login">login</Link>
            </div>
        )
    }

}

export default HomePage;