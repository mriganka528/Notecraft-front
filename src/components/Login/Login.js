import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login(props) {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let navigation = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://notecraft-back.vercel.app/api/auth/login`, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success === true) {
            //Redirect
            localStorage.setItem('token', json.auth_Token);
            props.showAlert(" Logged in successfully", "success");
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
        <form className={`${styles.login_form} ${props.theme}`} onSubmit={handleSubmit} style={{ fontSize: "2rem" }}>
            <div className=" mb-4">
                <h2>Sign in</h2>
            </div>
            <div className=" pass_div mb-3" style={{ fontSize: '1.8rem' }} >
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="pass_inp form-control" value={credentials.email} name='email' onChange={onChange} id="email" aria-describedby="emailHelp" placeholder="Enter email" style={{ fontSize: '1.3rem' }} />
                <small id="emailHelp" style={{ fontSize: '1.1rem' }} className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="mb-3" style={{ fontSize: '1.8rem' }}>
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" style={{ fontSize: '1.3rem' }} id="password" name='password' value={credentials.password} onChange={onChange} placeholder="Password" />
            </div>
            <button type="submit" className="button-84 my-3" >Sign in</button>
        </form>
    )
}

export default Login
