import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import React from 'react';
import { useEffect } from "react";
import Logo from '../utils/images/Logo.png';
import userIcon from '../utils/images/user_Icon.png';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {toggleGptSearchView} from "../utils/gptSlice"


const Header = () => {
  // const user = auth.currentUser;
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  const handleGptClick=()=>{
    // toggle GPT Search button
    dispatch(toggleGptSearchView());
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is signed in
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName
          }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe will be called when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {

    signOut(auth).then(() => {
      // Sign-out successful
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  return (
    <div className="flex justify-between items-center px-8  w-full absolute top-0 z-10">
      <img src={Logo} alt="Logo" className="w-32" />
      {user && (<div className="flex items-center gap-2">
        <button className={!showGptSearch ? "p-2 m-2 border-2 hover:bg-opacity-20 hover:text-white bg-white text-xs rounded-md": "p-2 m-2 border-2 hover:bg-opacity-20 hover:text-black bg-red-600 text-xs rounded-md"} onClick={()=>{handleGptClick()}}>{!showGptSearch ? "GPT Search": "NetflixGpt"}</button>
        <span className="text-white">Hi {user?.displayName}!</span>
        <div className="relative group">
          <button onClick={() => { handleSignOut() }}>
            <img src={userIcon} alt="User Icon" className="w-10 h-10 rounded-full" />
          </button>
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 ">
            {user != null ? "Sign Out" : "Sign In"}
          </div>
        </div>
      </div>)}
    </div>
  );
};

export default Header;
