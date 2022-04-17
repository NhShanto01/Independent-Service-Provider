import React from 'react';
import google from '../../../image/social-logos/google.png';
import facebook from '../../../image/social-logos/facebook.png';
import github from '../../../image/social-logos/github.png';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import './SocialLogin.css';
import Loading from '../../Home/Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    
    let errorElement;

    if(loading || loading1 ||loading2){
        return <Loading></Loading>
    }

    if (error || error1||error2) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1||user2) {
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
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-light w-50 d-block mx-auto my-2 border-secondary'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button
                    onClick={() => signInWithFacebook()} className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-dark w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;