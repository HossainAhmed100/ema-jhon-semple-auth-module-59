import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const email = user.email;
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    // const [error, setError] = useState('');
    // const navigate = useNavigate();

        const handleNameBlur = event => {
            setName(event.target.value)
    
        }
        const handlePhoneBlur = event => {
            setPhone(event.target.value)
        }
        const handlesetAddressBlur = event => {
            setAddress(event.target.value)
        }
        const handleCreateUser = event => {
            event.preventDefault();
            const shipping = {name, email, address, phone}
        }
    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title'>Your Shipping Info</h2>
        <form onSubmit={handleCreateUser} action="">
        <div className='input-group'>
        <label htmlFor="name">Name</label> 
        <input onBlur={handleNameBlur} type="text" name="name" id="" required/>
        <div className='input-group'>
        <label htmlFor="email">Email</label> 
        <input value={user?.email} readOnly type="email" name="email" id="" required/>
        </div>
        </div>
        <div className='input-group'>
        <label htmlFor="address">Address</label> 
        <input onBlur={handlesetAddressBlur} type="text" name="address" id="" required/>
        </div>
        <div className='input-group'>
        <label htmlFor="phone">Phone Number</label> 
        <input onBlur={handlePhoneBlur} type="phone" name="phone" id="" required/>
        </div>
        <input className='form-submit' type="submit" value="Add Shipping" />
        </form>
        {/* <p>Already Have an account?<Link className='form-link' to={'../login'}>Login</Link></p> */}
        </div>
        </div>
    );
};

export default Shipment;