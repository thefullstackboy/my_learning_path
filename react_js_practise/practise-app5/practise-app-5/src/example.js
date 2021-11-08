import React  from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './index.css';
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";


export default function BasicExample() {
    return (
        <Router>
            <div className="abc">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link >
                    </li>
                </ul>

                <hr/>
                <hr/>
                <Switch>
                    <Route exact path="/">
                        <Home />                    
                    </Route>
                    <Route path="/About">
                        <About />
                    </Route>
                    <Route path="/Dashboard">
                        <Dashboard />
                    </Route>          
               </Switch>   
            </div>
         </Router>   
    )    
}