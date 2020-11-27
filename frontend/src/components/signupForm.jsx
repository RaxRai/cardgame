import axios from 'axios';
import React, { useState } from 'react';
import "./css/form.css"

function SignupForm(props) {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("");

    const ValidateEmail=(mail)=>{
        let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (mail.match(emailformat)) {
              return true;
        };
        alert("Please enter correct email?!")
        return (false);
    };

    const handleEmail =(e)=>{
        setEmail(e.target.value)
    }
    const handleSubmit =()=>{
        if(!ValidateEmail(email) || !username || !password){
            alert("Please enter correct details?!")
            return;
        }
        let newFormdata = {
            username,
            email,
            password,
        }
        submitData(newFormdata);
    }
    const  submitData = async (newData)=>{
        axios.post(`http://localhost:4000/api/v1/register`,newData)
        .then(res => {
            // props.history.push("/analytics");
            console.log(res.data);
        })

     };

  return (
    <div className="contact-container">
        <div className="form">
            <h2>Signup Form</h2>
            <span>Username</span>
            <input type="text" onChange={(e)=> setUsername(e.target.value)} autoComplete="none"/>
            <span>Email</span>
            <input type="email" onChange={handleEmail} autoComplete="none" />
            <span>Password</span>
            <input  type="password" onChange={(e)=> setPassword(e.target.value)} autoComplete="none"/>
            <button name="SUBMIT" onClick={handleSubmit}>SUBMIT</button>
        </div>
    </div>
  );
}

export default SignupForm;
