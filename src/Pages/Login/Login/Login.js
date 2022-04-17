import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    const emailRef= useRef('');
    const passRef= useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let from = location.state?.from?.pathname || "/";

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return 
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        error = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        signInWithEmailAndPassword(email, pass);
    }
    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPass = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            // toast('Sent email');
        }
        else{
            // toast('please enter your email address'); 
        }
    }

    return (
        <div className='container w-50'>
            <h2 className='text-success mt-4'>Please Login</h2>
            <Form onSubmit={handleLogin} className='text-start mt-3'>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>
                
                <Button variant="success w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            {error}
            <p className='text-start'>New to Edu Phillip? <Link to="/register" className='text-success pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
            <p className='text-start'>Forget Password? <button className='btn btn-link text-success pe-auto text-decoration-none' onClick={resetPass}>Reset Password</button> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;