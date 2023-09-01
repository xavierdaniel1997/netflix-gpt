import React from "react";
import Logo from "../assets/images/pngwing.com.png";
import {signOut} from "firebase/auth";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="absolute flex justify-between items-center">
      <div className="relative w-48 mx-10 my-4 z-10">
        <img src={Logo} alt="" />
      </div>
      {user && (
        <div className="z-10">
          <button
            className="py-2 px-3 bg-red-500 text-white"
            onClick={handleSignOut}
          >
            Log Out
          </button>
          <p>{user.displayName}</p>
        </div>
      )}
    </div>
  );
};

export default Header;
