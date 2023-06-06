import React, { useEffect, useContext, useRef } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import "../css/TweetButton.css";
import { useState } from "react";
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

function TweetButton() {
  const { postData, setpostData } = useContext(postContext);
  const closeBtn = useRef(null);

  const [open, setOpen] = useState(false);

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
      <Box sx={{ "& > :not(style)": { m: 1 } }} className="fixed d-flex justify-content-end">
        <Fab color="primary" aria-label="edit">
          <EditIcon onClick={handleClickOpen} />
        </Fab>
      </Box>
      {/*  */}
      <div style={{ padding: "0px" }} className="tweet_container">
        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" style={{ padding: "0px" }}>
          {/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle> */}
          <DialogContent style={{ padding: "0px", paddingTop: "25px" }}>
            <DialogContentText id="alert-dialog-description">
              <TweetBox handleClose={handleClose} />
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

export default TweetButton;
