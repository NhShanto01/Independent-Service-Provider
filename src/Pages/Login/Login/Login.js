import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Home/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate(false);
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
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }
    let createError;
    if (error) {
        createError = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = () => {
        navigate('/register');
    }

    const resetPass = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }

    return (
        <section id='login'>
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
                {createError}
                <p className='text-start'>New to <span className='text-success fw-bold'>Edu Phillip</span> ? <Link to="/register" className='text-success pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>


                <p className='text-start'>Forget Password? <button className='btn btn-link text-success pe-auto text-decoration-none' onClick={resetPass}>Reset Password</button> </p>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        </section>
    );
};

export default Login;