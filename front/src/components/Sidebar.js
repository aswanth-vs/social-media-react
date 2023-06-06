import React from "react";
import SidebarLink from "./SidebarLink";
import "../css/Sidebar.css";
// import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import TweetButtonLG from "./TweetButtonLG";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <SidebarLink text="Explore" Icon={SearchIcon} />
        <SidebarLink text="Notifications" Icon={NotificationsNoneIcon} />
        <SidebarLink text="Messages" Icon={MailOutlineIcon} />
        <SidebarLink text="Profile" Icon={PermIdentityIcon} />
        <TweetButtonLG text="Post" />
      </div>
    </>
  );
}

export default Sidebar;
