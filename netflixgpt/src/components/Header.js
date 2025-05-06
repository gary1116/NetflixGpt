import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import React from 'react';
import Logo from '../utils/images/Logo.png';
import userIcon from '../utils/images/user_Icon.png';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  // const user = auth.currentUser;
  const user=useSelector(store=>store.user);
  const navigate =useNavigate();

  const handleSignOut = ()=>{

    signOut(auth).then(() => {
      // Sign-out successful
      navigate("/");

    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  return (
    <div className="flex justify-between items-center px-8 py-4  w-full fixed top-0 z-10">
      <img src={Logo} alt="Logo" className="w-44" />
     {user && (<div className="flex items-center gap-2">
      <span>Hi {user?.displayName}!</span>
      <div className="relative group">
        <button onClick={()=>{handleSignOut()}}>
          <img src={userIcon} alt="User Icon" className="w-10 h-10 rounded-full" />
        </button>
        <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 ">
         {user!=null ? "Sign Out": "Sign In"}
        </div>
      </div>
      </div>)}
    </div>
  );
};

export default Header;
