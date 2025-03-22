


import React, { useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import profile from './Profile.jpg';
import './Profile.css'
const ProfilePhoto = () => {
  const [image, setImage] = useState(profile);
  const user = JSON.parse(localStorage.getItem("user"));
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="box">
      <Avatar
        src={image}
        alt="Profile"
        sx={{ width: 100, height: 100 }}
      />
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      <label htmlFor="upload-photo">
        <IconButton
          component="span"
          sx={{
            position: "relative",
            bottom: 30,
            left:60,
            right: 0,
            width:'30px',
            height:'30px',
            
            backgroundColor: "blueviolet",
            border: "2px solid #ddd",
          }}
        >
          <CameraAltIcon sx={{color:'white', width:'20px',
            height:'20px' }} color="primary" />
        </IconButton>
        
      </label>
      <p  style={{color:'black'}}> Name : {user?.name} </p>
      <p style={{color:'black'}}> Email : {user?.email}</p>
     
     <p style={{marginTop:'20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus, dicta porro voluptatum aut autem.</p>
    </div>
  );
};

export default ProfilePhoto;
