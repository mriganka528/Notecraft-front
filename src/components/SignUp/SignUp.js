import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SignUp.css'
function SignUp(props) {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
  let navigation = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`https://notecraft-back.vercel.app/api/auth/createUser`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success === true) {
      //Redirect
      localStorage.setItem('token', json.auth_Token);
      props.showAlert(" Account created successfully", "success");
      navigation("/");

    }
    else {
      props.showAlert(" Invalie Credentials", "danger");

    }
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  return (

    <form className={` signup_form ${props.theme}`} onSubmit={handleSubmit} >
      <div className=" mb-4">
        <h2>Sign up</h2>
      </div>
      <div className="form-group "  style= {{ fontSize: "1.65rem" }}>
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control"   style={{ fontSize: "1.3rem" }} id="name" name='name' onChange={onChange} value={credentials.name} aria-describedby="emailHelp" placeholder="Enter name" />
      </div>
      <div className="form-group"  style= {{ fontSize: "1.65rem" }}>
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" style={{ fontSize: "1.3rem" }} id="email" name='email' aria-describedby="emailHelp" onChange={onChange} value={credentials.email} placeholder="Enter email" />
        <small id="emailHelp" style={{fontSize:'1.1rem'}} className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group"  style= {{ fontSize: "1.65rem" }}>
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" style={{ fontSize: "1.3rem" }} id="password" name='password' value={credentials.password} onChange={onChange} placeholder="Password" />
      </div>
      <div className="form-group"  style= {{ fontSize: "1.65rem" }}>
        <label htmlFor="conf_password">Confirm Password</label>
        <input type="password" className="form-control" style={{ fontSize: "1.3rem" }} id="conf_password" name='conf_password' value={credentials.password} onChange={onChange} placeholder="Renter password" />
      </div>
      <button type="submit" className="button-84 btn-lg my-3">Sign Up</button>
    </form>
  )
}

export default SignUp
