import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { refreshAccessToken } from "./api/api";
import { useDispatch } from "react-redux";
import { setAccessToken } from "./store/tokens";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshToken = localStorage.getItem("REFRESH_TOKEN");
    if (refreshToken) {
      refreshAccessToken().then((accessToken) => {
        dispatch(setAccessToken(accessToken));
      });
    }
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        {/* <Route path="/posts" element={<Posts />} /> */}
      </Routes>
    </>
  );
}

export default App;
