import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import { Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import PNF from "./Pages/PNF";
import Login from "./Pages/Login";
import Messages from "./Pages/Messages";
import Notifications from "./Pages/Notifications";
import Explore from "./Pages/Explore";
import Post from "./Pages/Post";
import TweetButton from "./components/TweetButton";
import TweetBox from "./components/TweetBox";

function App() {
  return (
    <>
      {/* header */}
      {/* <Header /> */}
      {/* navbar/sidewidget - post feed - miscellaneous */}
      <div className="row d-flex justify-content-center container-fluid ">
        <div className="col-xl-3 col-lg-3 col-md-1 col-sm-2 left">
          {/* side widgets / navbar */}
          <Sidebar />
        </div>
        <div className="col-xl-5 col-lg-5 col-md-8 col-sm-10 border middle">
          <Routes>
            <Route extact path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="*" element={<PNF />} />
            <Route path="/test" element={<TweetBox />} />
          </Routes>
          <div className=" d-flex justify-content-end">
            <TweetButton />
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 right">3</div>
      </div>
    </>
  );
}

export default App;
