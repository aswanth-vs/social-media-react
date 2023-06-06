import React, { useState } from "react";
import "../css/TweetCard.css";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { postContext } from "../components/ContextShare";

function TweetCard({ post }) {
  // contextshare
  // const { postData, setpostData } = useState(postContext);

  const [liked, setliked] = useState(false);
  const [saved, setsaved] = useState(false);

  // stopPropagation() and preventDefault() are used so that the buttons inside the Link tag can be clicked without redirecting

  const likebtnClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setliked(!liked);
  };

  const commentbtnClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  // share option
  const sharebtnClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    handleClickOpen();
  };
  // share alert/modal
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const confirmShare = () => {
    toast.success("Post Shared");
    handleClose();
  };

  const postSaved = (e) => {
    //for some reason value for saved was behaving like !saved in the if condition
    let temp = !saved;
    setsaved(temp);
    e.stopPropagation();
    e.preventDefault();

    if (temp) {
      console.log(saved);
      toast.success("Post Saved");
    } else if (!temp) {
      toast.warning("Post Unsaved");
    }
  };
  console.log(saved);
  // console.log(liked);
  return (
    <>
      <Link style={{ all: "unset" }} to={"/post/1"}>
        <article className="border-top border-bottom py-3">
          <div className="profile px-1">
            <Link to={"/profile"} style={{ all: "unset" }}>
              <img src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg" alt="" className="img-fluid " />
            </Link>
          </div>
          <div className="post ">
            <div className="heading">
              <Link to={"/profile"} style={{ all: "unset" }}>
                <span className="author fw-bold me-1">{post ? post : "John Lee"}</span>
                <span className="text-muted">@vagomundo</span>
                <span className="text-muted mx-1">•</span>
                <span className="text-muted">May 27</span>
              </Link>
            </div>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aliquam quae unde, quibusdam natus vero, dolorum mollitia optio placeat esse sunt aut. Laboriosam ullam voluptatibus, eos commodi labore quae eaque.</p>

            <div className="post_buttons">
              <div className="">
                {/* like button */}
                <button className="btn d-flex align-items-center extra" onClick={(e) => likebtnClick(e)}>
                  {liked ? <i class="fa-solid fa-heart fa-xl" style={{ color: "#ff0000" }}></i> : <i class="fa-regular fa-heart fa-xl" style={{ color: "#000000" }}></i>}
                </button>
                {/* comment button */}
                <button className="btn d-flex align-items-center extra" onClick={(e) => commentbtnClick(e)}>
                  <i class="fa-regular fa-comment fa-flip-horizontal fa-xl"></i>
                </button>
                {/* share button */}
                <button className="btn d-flex align-items-center extra" onClick={(e) => sharebtnClick(e)}>
                  <i class="fa-sharp fa-solid fa-share fa-xl"></i>
                </button>
              </div>
              <div className="right">
                {/* save post button */}
                <button className="btn d-flex align-items-center extra" onClick={(e) => postSaved(e)}>
                  {saved ? <i class="fa-solid fa-bookmark fa-xl"></i> : <i class="fa-regular fa-bookmark fa-xl"></i>}
                </button>
                <ToastContainer position="bottom-right" />
              </div>
            </div>
          </div>
        </article>
      </Link>

      {/* Alert Container    */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Share this Post"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={confirmShare}>Share Post</Button>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default TweetCard;
