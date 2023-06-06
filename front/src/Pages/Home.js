import React, { useState } from "react";
import TweetBox from "../components/TweetBox";
import "../css/Home.css";
import ForYou from "./ForYou";
import Following from "./Following";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

function Home() {
  const [tab, settab] = useState(1);
  const [logined, setlogined] = useState();

  const switchTab = (id) => {
    settab(id);
  };

  const logintest = () => {
    setlogined(!logined);
  };

  return (
    <>
      <div className="main">
        <h4 className="pt-3 ps-3 d-flex justify-content-between">
          <span>Home</span>
          <div className="testing">
            <button className="btn d-flex align-items-center " onClick={() => logintest()}>
              {/* {logined ? <i class="fa-regular fa-id-badge fa-xl"></i> : <i class="fa-solid fa-user fa-xl"></i>} */}
              <PermIdentityIcon style={{ width: "50px" }} />
            </button>
          </div>
          {}
        </h4>
        <div className="tabs d-flex justify-content-around mt-3 border-bottom">
          {/* <div> */}
          {/* arrow function to avoid infinite loop because argument was passed */}
          <button className="btn_container text-center" onClick={() => switchTab(1)}>
            <span className={tab == 1 ? "active" : ""}>For you</span>
          </button>
          {/* </div> */}
          {/* <div className="btn_container" style={{ width: "100%" }}> */}
          {/* arrow function to avoid infinite loop  because argument was passed*/}
          <button className="btn_container text-center" onClick={() => switchTab(2)}>
            <span className={tab == 2 ? "active" : ""}>Following</span>
          </button>
          {/* </div> */}
        </div>
      </div>
      {/* <TweetBox /> */}
      <div className="feed ">{tab == 1 ? <ForYou /> : <Following />}</div>
    </>
  );
}

export default Home;
