import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Auth from "../AuthPage/Auth";
import Home from "../HomePage/Home";
import ProfileContainer from "../ProfilePage/ProfileContainer";


export default function Navbar() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/">Auth</Link>
          </li>  
          <li>
            <Link to="/prof">Profile</Link>
          </li>    
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Auth/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>    
          <Route path="/prof">
            <ProfileContainer/>
          </Route>      
        </Switch>
      </div>
    </Router>
  );
}