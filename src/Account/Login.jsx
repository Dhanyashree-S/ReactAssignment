import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid2, TextField } from "@mui/material";
import './Login.css'
const Login = () => {
  const [data, setdata] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    let {name,value}=e.target;
    setdata({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === data.email &&
      storedUser.password === data.password
    ) {
      navigate("/profile");
      window.location.reload();
    } else {
      alert("Invalid data or Email and password is not matching");
    }
  };

  return (
    <div className="page">
      <h1  style={{marginTop:'20px',marginLeft:'23px'}}>Signin your PopX account</h1>
      <p style={{marginTop:'20px' ,marginLeft:'23px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quos!</p>
      
  <form onSubmit={handleSubmit}>
  
      <Grid2
        
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          id="email"
          name='email'
          placeholder="Enter the email"
          
onChange={handleChange}
          label={
            <span>
              Email <span style={{ color: "red" }}>*</span>
            </span>
          }          variant="outlined"
          fullWidth
          sx={{
            mx: 3,
            mt: 3,

            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": { borderColor: "rgba(148, 144, 144, 0.8)" },
              "&.Mui-focused fieldset": {
                borderColor: "rgba(148, 144, 144, 0.8)",
              },
            },
            "& .MuiInputLabel-root": { fontSize: "1rem" },
            "& .MuiInputLabel-root.Mui-focused": {
              fontSize: "1.1rem",
              color: "blueviolet",
            },
          }}
        />
        <br/>
        <TextField
        name="password"
          id="password"
          onChange={handleChange}
         
          label={
            <span>
              Password <span style={{ color: "red" }}>*</span>
            </span>
          }    
          placeholder="Enter the Password"
          variant="outlined"
          fullWidth
          sx={{
            mx: 3,
            mt: 3,

            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": { borderColor: "rgba(148, 144, 144, 0.8)" },
              "&.Mui-focused fieldset": {
                borderColor: "rgba(148, 144, 144, 0.8)",
              },
            },
            "& .MuiInputLabel-root": { fontSize: "1rem" },
            "& .MuiInputLabel-root.Mui-focused": {
              fontSize: "1.1rem",
              color: "blueviolet",
            },
          }}
        />
      </Grid2>
      <Button
          variant="contained"
          
          color="primary"
          sx={{  width: { xs: "90%", sm: "90%" },height:'45px',marginTop:'20px',cursor: "pointer", backgroundColor: "blueviolet",marginLeft:'25px' }}
          type="submit"
        >
          Login
        </Button>
        </form>
    </div>
  );
};
export default Login;
