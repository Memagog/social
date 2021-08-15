import React from 'react'
import "./ProfileContainer.scss"
import Profile from './Profile/ProfileHeader'
export default function ProfileContainer() {
    return (    
            <div className="container">
                
                <div className="menu">
                    <p>Right</p>                    
                </div>  

                <div className="main">
                    <Profile></Profile>
                </div>  

                <div className="right">
                    <p>Left</p>
                </div>

            </div>       
    )
}
