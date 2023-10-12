import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { LOGO } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-50 flex justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={user?.photoURL}
          />
          <p>{user?.displayName}</p>
          <button onClick={handleSignOut} className="font-bold text-white p-2">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
