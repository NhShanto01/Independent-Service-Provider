import React from 'react';
import google from '../../../image/social-logos/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Home/Loading/Loading';
import './SocialLogin.css';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   
    const navigate = useNavigate();
    
    let errorElement;

    if(loading ){
        return <Loading></Loading>
    }

    if (error ) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    if (user ) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-success w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-success w-50'></div>
            </div>
            {errorElement}
            <div className='social-btn'>
                <button
                    onClick={() => signInWithGoogle()}
                    className='button btn btn-light sm:w-100 d-block mx-auto my-2 border-secondary'>
                    <img className='btn-img' style={{ width: '30px' }} src={google} alt="" />
                    <span className='btn-title px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;