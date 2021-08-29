import React from 'react'

export default function Register() {
    return (    
        <div className="auth__container">
            {/* <div className="auth__container_input-block">

            </div> */}
            <div className="auth__container_form-block">
                <form className="auth__container_form-block_auth-form">
                    <input className="auth__container_form-block_email-input" type="email" name="email" placeholder="Email"/>      
                    <input className="auth__container_form-block_password-input" type="password" name="password" placeholder="Password"/>                    
                    <button className="auth__container_form-block_submit-button" type="submit">Register</button>
                </form>                    
            </div>
        </div>
        
    )
}
