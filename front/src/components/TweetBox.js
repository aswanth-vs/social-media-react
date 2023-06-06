import React, { useRef, useState, useEffect, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../css/TweetBox.css";
import TextField from "@mui/material/TextField";
import ImageIcon from "@mui/icons-material/Image";
import CloseIcon from "@mui/icons-material/Close";
import PublicIcon from "@mui/icons-material/Public";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { createPost } from "../services/allAPIs";
import { postContext } from "../components/ContextShare";

function TweetBox(props) {
  const { handleClose } = props;

  // contextshare
  const { postData, setpostData } = useContext(postContext);

  //to hold uploaded image
  const [image, setimage] = useState("");

  //state to show the image preview
  const [preview, setpreview] = useState("");

  // hold post text
  const [postContent, setpostContent] = useState("");

  // state to change the post visibility
  const [visibility, setvisibility] = useState(true);

  const changeVisibility = () => {
    setvisibility(!visibility);
  };

  const updateText = (e) => {
    setpostContent(e.target.value);
  };

  // to handle file input using <button>
  const fileInput = useRef(null);
  const handleFileChange = (e) => {
    console.log("success");
    setimage(e.target.files[0]);
  };
  const handleClick = () => {
    fileInput.current.click();
  };

  const closeImg = () => {
    setpreview("");
    setimage("");
  };

  const submitPost = async () => {
    // console.log(postContent);
    //header config
    const headerConfig = {
      "Content-Type": "multipart/form-data",
    };
    //body-form data
    const data = new FormData();
    data.append("post_image", image);
    data.append("post_content", postContent);
    const response = await createPost(data, headerConfig);
    console.log(response);
    if (response.status == 200) {
      setpostData(response.data);
    }
  };

  useEffect(() => {
    //update profile pic
    if (image) {
      setpreview(URL.createObjectURL(image));
    }
  }, [image]);

  return (
    <>
      <div className=" d-flex flex-column mb-3">
        <div className="top">
          <div className="user_profile px-1 ">
            <img src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg" alt="" className="img-fluid " />
          </div>
          <div className="post pe-3" style={{ width: "100%" }}>
            <TextField onChange={updateText} id="outlined-multiline-static" label="Whats on your Mind?" multiline style={{ width: "100%" }} inputProps={{ maxLength: 700 }} sx={{ border: "none", "& fieldset": { border: "none" } }} />
          </div>
        </div>
        <div className="container px-5">
          <div className="sample">
            <div className="d-flex justify-content-end">
              <button className="btn">
                {" "}
                <CloseIcon onClick={closeImg} style={{ display: !preview && "none", cursor: "pointer" }} />
              </button>
            </div>
            {/* so only when the image is loaded into the state will the image tag be displayed */}
            <img src={preview} alt="selected image" className={preview ? "img-fluid" : "hide"} />
          </div>
        </div>
        <div className="bottom px-3 border-top mt-2 ">
          <div className="bottom_left">
            <button className="upload_image p-2 btn" onClick={() => handleClick()}>
              <ImageIcon style={{ color: "rgb(25,118,210)" }} />
            </button>
            <input type="file" onChange={handleFileChange} ref={fileInput} className="hide" accept="image/png, image/gif, image/jpeg,image/jpg" />
            <button className="post_visibility d-flex align-content-center" onClick={() => changeVisibility()}>
              <span className="py-1 px-2" style={{ color: "rgb(25,118,210)" }}>
                {visibility ? (
                  <>
                    Everyone <PublicIcon />
                  </>
                ) : (
                  <>
                    Friends <PeopleAltIcon />
                  </>
                )}
              </span>
            </button>
          </div>
          <div className="bottom_right">
            <button className="btn btn-primary px-4 fw-bold" onClick={submitPost}>
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TweetBox;
