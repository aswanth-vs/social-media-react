import React, { useState } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Explore_Posts from "./Explore_Posts";
import Explore_Accounts from "./Explore_Accounts";
import TweetCard from "../components/TweetCard";
import "../css/Explore.css";
import Header from "../components/Header";

//

function Explore() {
  const [tab, settab] = useState(1);
  const switchTab = (id) => {
    settab(id);
  };

  const posts = [
    {
      name: "post1",
    },
    {
      name: "post2",
    },
    {
      name: "post3",
    },
    {
      name: "post4",
    },
    {
      name: "post5",
    },
  ];

  const accounts = [
    {
      name: "account1",
    },
    {
      name: "rand",
    },
    {
      name: "moon",
    },
    {
      name: "naal",
    },
    {
      name: "anj",
    },
  ];

  const itemList = ["Apple", "Orange", "Banana", "Cherry", "Milk", "Peanuts", "Butter", "Tomato"];
  const [posts_filtered, set_posts_filtered] = useState(posts);
  const [accounts_filtered, set_accounts_filtered] = useState(accounts);
  // var accounts_filtered = accounts;

  const [temp, settemp] = useState("");
  const filterContent = (event) => {
    let search_value = event.target.value;
    console.log(search_value);
    if (tab == 1) {
      var temp_post_list = [...posts];
      temp_post_list = temp_post_list.filter((post) => {
        return post.name.toLocaleLowerCase().includes(search_value.toLocaleLowerCase());
      });
      set_posts_filtered(temp_post_list);
    } else if (tab == 2) {
      var temp_account_list = [...accounts];
      temp_account_list = temp_account_list.filter((account) => {
        return account.name.toLocaleLowerCase().includes(search_value.toLocaleLowerCase());
      });
      set_accounts_filtered(temp_account_list);
    }
  };

  // IMPORTANT
  // send filtered results as a prop????
  return (
    <>
      <div className="main">
        <Header text={"Explore"} />
        {/* SEARCH BOX */}
        <div className="d-flex justify-content-center">
          <input type="text" onChange={(event) => filterContent(event)} className="searchbar form-control " />
        </div>
        {/* arrow function to avoid infinite loop  because argument was passed*/}
        <div className="tabs d-flex justify-content-around mt-3 border-bottom">
          <button className="btn_container text-center" onClick={() => switchTab(1)}>
            <span className={tab == 1 ? "active" : ""}>Posts</span>
          </button>
          <button className="btn_container text-center" onClick={() => switchTab(2)}>
            <span className={tab == 2 ? "active" : ""}>Accounts</span>
          </button>
        </div>
      </div>

      {/* <TweetBox /> */}
      <div className="feed">
        {tab == 1 ? (
          <ul>
            {posts_filtered.map((post) => (
              <li className="post_card">
                <TweetCard post={post.name} />
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {accounts_filtered.map((account) => (
              <li>{account.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Explore;
