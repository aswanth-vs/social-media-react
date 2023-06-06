import React, { useState, useContext, useRef, useEffect } from "react";
import "../css/TweetButtonLG.css";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TweetBox from "./TweetBox";
import { postContext } from "../components/ContextShare";

function TweetButtonLG({ text }) {
  const [open, setOpen] = useState(false);
  const { postData, setpostData } = useContext(postContext);
  const closeBtn = useRef(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (postData) {
      //
      setTimeout(() => {
        closeBtn.current?.click();
      }, 1000);
      setpostData("");
    }
  }, [postData]);
  return (
    <>
      <div className=" mt-5 d-flex justify-content-center">
        <button className="btn btn-primary tweet_btn_container" onClick={handleClickOpen}>
          <h4 className="show_lg">{text}</h4>
          <span className="show_sm">
            <EditIcon />
          </span>
        </button>
      </div>

      {/*  */}
      <div style={{ padding: "0px" }} className="tweet_container">
        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" style={{ padding: "0px" }}>
          {/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle> */}
          <DialogContent style={{ padding: "0px", paddingTop: "25px" }}>
            <DialogContentText id="alert-dialog-description">
              <TweetBox />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} ref={closeBtn} style={{ display: "none" }}>
              Disagree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default TweetButtonLG;
