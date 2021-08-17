import React from "react";
import "./ProfileNavbar.scss"
import {

  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Tweets from './../ProfileContent/Tweets';
import Replies from './../ProfileContent/Replies';
import Likes from './../ProfileContent/Likes';
export default function ProfileNavbar() {
    return (        
            <Router>
                <div className="profile-navbar_container">
                    <ul className="profile-navbar_container_nav">
                        <div className="profile-navbar_container_nav_link">
                            <li>
                                <Link to="/tweets" style={{textDecoration: "none"}}><p>tweets</p></Link>
                            </li>   
                        </div>
                                            
                        <div className="profile-navbar_container_nav_link">
                            <li>
                            <Link to="/replies" style={{textDecoration: "none"}}><p>replies</p></Link>
                            </li>
                        </div>

                         <div className="profile-navbar_container_nav_link">
                            <li>
                            <Link to="/likes" style={{textDecoration: "none"}}><p>likes</p></Link>
                            </li>
                        </div>                      
                    </ul>

                     {/* <hr /> */}
                    <Switch>
                        <Route path="/tweets">
                            <Tweets></Tweets>
                        </Route>
                        <Route path="/replies">
                            <Replies></Replies>
                        </Route>
                        <Route path="/likes">
                            <Likes></Likes>
                        </Route>
                    </Switch>
                </div>
            </Router>
     
    )
}
