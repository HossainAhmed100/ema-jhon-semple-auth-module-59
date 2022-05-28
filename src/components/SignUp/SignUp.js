import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
if(user){
    navigate('/shop')
}
    const handleEmailBlur = event => {
        setEmail(event.target.value)

    }
    const handlepasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleconfirmpasswordBlur = event => {
        setConfirmpassword(event.target.value)
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if(password !== confirmpassword){
            setError('Your Password Did not match')
            return;
        }
        if(password.length < 6){
            setError('Password must pe 6 characters or longer')
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title'>SignUp</h2>
        <form onSubmit={handleCreateUser} action="">
        <div className='input-group'>
        <label htmlFor="email">Email</label> 
        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
        </div>
        <div className='input-group'>
        <label htmlFor="password">Password</label> 
        <input onBlur={handlepasswordBlur} type="password" name="password" id="" required/>
        </div>
        <div className='input-group'>
        <label htmlFor="password">Confurm Password</label> 
        <input onBlur={handleconfirmpasswordBlur} type="password" name="password" id="" required/>
        </div>
        <p style={{color: 'red'}}>{error}</p>
        <input className='form-submit' type="submit" value="Login" />
        </form>
        <p>Already Have an account?<Link className='form-link' to={'../login'}>Login</Link></p>
        </div>
        </div>
    );
};

export default SignUp;