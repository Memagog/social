import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import "./AppContainer.scss";
import Menu from '../Menu/Menu';
import ProfileContainer from './../Profile/ProfileContainer/ProfileContainer';
const routes = [
  {
    path: "/",
    exact: true,   
    main: () => <h2>Home</h2>
  },
  {
    path: "/twit", 
    main: () => <h2>Twit</h2>
  },
  {
    path: "/prof",
    main: () =><ProfileContainer></ProfileContainer>
  },
  {
    path: "/followers",
    main: ()=> <div>Followers</div>
  }
];
export default function AppContainer() {
    return (   
        <Router>                  
            <div className="container"> 
                <div className="menu">
                    <Menu/>
                </div>
                <div className="main">
                    <Switch>
                        {routes.map((route, index) => (             
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={<route.main />}
                        />
                        ))}
                    </Switch>
                </div>  

                <div className="right">
                    <p>Left</p>
                </div>
            </div>    
        </Router> 
                
    )
}
