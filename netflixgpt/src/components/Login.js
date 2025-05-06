import React, { useState, useRef } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import Header from './Header'
import background from '../utils/images/background.jpg'
import { checkValidData } from "../utils/validate";
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [isErrMessage, setIsErrorMessage] = useState(null);
    const navigate = useNavigate();
    const name=useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick = (email, password) => {
        //Validate the form data
        const message = checkValidData(email.current.value, password.current.value);
        setIsErrorMessage(message);

        if (message)
            return;

        //Sign In/Sign up
        if (!isSignInForm) {

            //signUp Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setIsErrorMessage(errorCode + " - " + errorMessage);
                });


        } else {
            //signIn Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse");

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setIsErrorMessage(errorCode + " - " + errorMessage);
                });

        }

    }

    return (
        <div className="">
            <div className='h-screen relative'>
                <Header />
                <img src={background} alt="background image" className='h-full w-full object-cover' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-8 border-double border-gray-400 hover:border-gray-600  bg-black bg-opacity-70 p-10'>
                <h1 className='font-bold text-white'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name}type="text" placeholder='Full Name' className=' p-2 m-2  w-64 rounded-lg' />}
                <input ref={email} type="text" placeholder='Email Address' className=' p-2 m-2  w-64 rounded-lg' />
                <input ref={password} type="password" placeholder='password' className='p-2 m-2  w-64 rounded-lg' />
                {<p className='font-bold text-red-500'>{isErrMessage}</p>}
                <button className='p-2 m-2 bg-red-600 text-white rounded-lg' onClick={() => { handleButtonClick(email, password) }}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='text-white p-5 cursor-pointer' onClick={() => { toggleSignInForm() }}>{isSignInForm ? "New to NetflixGpt? Sign Up Now" : "Already a user? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login
