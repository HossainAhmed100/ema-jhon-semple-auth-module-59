import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const location = useLocation();
      const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value)

    }
    const handlepasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleUserSignin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    if(user){
        navigate(from, {replace: true})
    }
    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title'>This is login</h2>
        <form onSubmit={handleUserSignin} action="">
        <div className='input-group'>
        <label htmlFor="email">Email</label> 
        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
        </div>
        <div className='input-group'>
        <label htmlFor="password">Password</label> 
        <input onBlur={handlepasswordBlur} type="password" name="password" id="" required/>
        </div>
        <p style={{color: 'red'}}>{error?.message}</p>
        <input className='form-submit' type="submit" value="Login" />
        </form>
        <p>New to Ema-Jhon? <Link className='form-link' to={'../signup'}>Create New Account</Link></p>
        <div class="division">
        <div class="row">
            <hr />
            <div class="col-6"><span>or</span></div>
            <hr />
        </div>
        </div>
        </div>
        </div>
    );
};

export default Login;