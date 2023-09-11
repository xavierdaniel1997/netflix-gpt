import React, {useEffect} from "react";
import Logo from "../assets/images/pngwing.com.png";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addUser, removeUser} from "../redux/userSlice";
import {toggleGptSearchView} from "../redux/gptSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute flex justify-between items-center w-full">
      <div className="w-48 mx-10 my-4 z-10">
        <img src={Logo} alt="" className="" />
      </div>
      {user && (
        <div className="mx-12 px-5 flex items-center gap-2">
          <button
            className={`px-10 py-2  cursor-pointer z-40 bg-white text-black`}
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Home" : "Search "}
          </button>
          <button
            className="py-2 px-3 bg-red-500 text-white cursor-pointer z-40"
            onClick={handleSignOut}
          >
            Log Out
          </button>
          <p className="text-lg font-semibold text-red-500">
            {user.displayName}
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
