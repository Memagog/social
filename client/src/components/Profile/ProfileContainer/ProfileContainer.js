import React from 'react'
import ProfileNavbar from '../ProfileNavbar/ProfileNavbar';
import ProfileHeader from './../ProfileHeader/ProfileHeader';

export default function ProfileContainer() {
    return (
        <div className="profile-container">
            <div className="profile-container__profile-header">
                <ProfileHeader></ProfileHeader>
            </div>
            <div className="profile-container__profile-navbar">
                <ProfileNavbar></ProfileNavbar>
            </div>
            <div className="profile-container__profile-content">
                <hr/>
                <h1>Footer</h1>
            </div>
        </div>
    )
}
