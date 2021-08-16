import React from 'react'
import { Link } from 'react-router-dom'
import "./Menu.scss"
export default function Menu() {
    return (
        <div>           
            <div className="menu__button-group"> 
                <Link to="/">                       
                    <button className="menu__button-group_button">
                        <p>Home</p>
                    </button>
                </Link>   
                <Link to="/twit">                       
                    <button className="menu__button-group_button">
                        <p>Twit</p>
                    </button>
                </Link>
                <Link to="/prof">                       
                    <button className="menu__button-group_button">
                        <p>Profile</p>
                    </button>
                </Link>                           
            </div>            
               
        </div>
    )
}
