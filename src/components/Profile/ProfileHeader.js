import React from 'react'
import "./Profile.scss"
const user = {     
    _id: 12393743,
    name: "George",
    data:"03:12:2000",
    followers: 0,
    following: 23,

}
export default function Profile() {
    return (
        <div className="profile">
           <div className="profile__container">               
                <div className="profile__container_img-block">
                    <img 
                    src="https://sun9-64.userapi.com/impg/mchhw5fLk4tZk2rAvYyR8XcpXHbLh8ejmBt3XA/3t8No7E3IbQ.jpg?size=888x1590&quality=96&sign=4b18e4fbccd484bc10974febcadbdd73&type=album" 
                    alt="profile-img" 
                    className="profile__container_img-block_profile-img"
                    />
                </div>
                <div className="profile__container_info-block">      
                   <div className="profile__container_info-block_info-container">
                        <p>id: {user._id}</p>
                        <p>Username: {user.name}</p>
                        <p>Data: {user.data}</p>
                        <p>followers: {user.followers} following: {user.following}</p>
                   </div>
                   <div>
                       <button className="profile__container_info-block_edit-button">Edit profile</button>
                   </div>                     
                </div>
           </div>
        </div>
    )
}
