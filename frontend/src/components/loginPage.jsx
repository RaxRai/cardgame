import React from "react";
import "./css/common.css"
import SignupForm from "./signupForm"

export default function LoginPage(props){
    return (

        <div className="login-page">
            <div className="login-panel">
                <div className="login-button">
                    <SignupForm />
                </div>
            </div>
        </div>



    )
}