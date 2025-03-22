import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Style from "./Home.module.css";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <div className={Style.home}>
      <h1>Welcome to PopX</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur consequatur voluptatibus
        suscipit. Doloribus!
      </p>
      <NavLink to="/createaccount">
      <Button
          variant="contained"
          sx={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "rgb(98, 42, 155)",
            fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
            width: { xs: "200px", sm: "250px", md: "300px" }, // Responsive width
            height: { xs: "45px", sm: "50px" }, // Responsive height
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Create Account
        </Button>
        ;
      </NavLink>
      <NavLink to="/login">
      <Button
          variant="contained"
          sx={{
            fontWeight: "bold",
            color: "black",
            backgroundColor: "rgb(177, 176, 178)",
            fontSize: { xs: "14px", sm: "16px" },
            width: { xs: "200px", sm: "250px", md: "300px" },
            height: { xs: "45px", sm: "50px" },
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Already Registration? Login
        </Button>
        ;
      </NavLink>
    </div>
  );
};
export default Home;
