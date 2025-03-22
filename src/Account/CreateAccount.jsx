import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./CreateAccount.module.css";
import { Button, Grid2, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// import Box from '@mui/material/Box';

const CreateAccount = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency:""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    let {name,value}=e.target;
   
    setUser({ ...user, [name]:value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!(user.email=='' || user.password==''||user.phone==''||user.company==''||user.agency=='')){
      
      if(user.phone.length>10 || user.phone.length<1){
alert('Phone number is less than 3 or greater thean 10')

      }else{
        console.log("User Data:", user);
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/login");
    window.location.reload()
      }
    
    }
else{
  alert('Form is invaild ,Please fill the field')

}
    
  };

  return (
    <div  className={Style.account}>
      <h1 style={{color:"black" ,marginLeft:'50px'}}>Create your PopX Account</h1>
     
  <form onSubmit={handleSubmit}>
      <Grid2
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
      
      >
        <TextField
          id="name"
          label={
            <span>
              Name <span style={{ color: "red" }}>*</span>
            </span>
          }          variant="outlined"
          name="name"
          value={user.name}
          onChange={handleChange}
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
      color: "blueviolet" 
    },          }}
        />
        <TextField
          id="phone"
          name="phone"
          value={user.phone}
          label={
            <span>
              Phone Number <span style={{ color: "red" }}>*</span>
            </span>
          }          onChange={handleChange}

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
      color: "blueviolet" 
    },          }}        />
        <TextField
          id="email"
          name="email"
          value={user.email}
          label={
            <span>
              Email <span style={{ color: "red" }}>*</span>
            </span>
          }          variant="outlined"
          onChange={handleChange}

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
      color: "blueviolet" 
    },
          }}        />
        <TextField
          id="password"
          name="password"
          value={user.password}
          label={
            <span>
              Password <span style={{ color: "red" }}>*</span>
            </span>
          }          variant="outlined"
          fullWidth
          onChange={handleChange}

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
      color: "blueviolet" 
    },
          }}        />
        <TextField
          id="company"
          name="company"
          value={user.company}
          label={
            <span>
              CompanyName<span style={{ color: "red" }}>*</span>
            </span>
          }          variant="outlined"
          onChange={handleChange}

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
      color: "blueviolet" 
    },          }}        />

        <FormControl>
          <FormLabel sx={{ color: "black", "&.Mui-focused": { color: "black" } }} >Are you Agency?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue=""
            name="agency"
            value={user.agency} 
            
onChange={handleChange}
          >
            <FormControlLabel
              value="yes"
              control={
                <Radio sx={{ "&.Mui-checked": { color: "blueviolet" } }} />
              }
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={<Radio sx={{ "&.Mui-checked": { color: "blueviolet" } }} />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
      </Grid2>
      <Button
          variant="contained"
        
          color="primary"
          sx={{ cursor: "pointer", backgroundColor: "blueviolet" ,marginLeft:"120px"}}
          type="submit"
        >
          Create Account
        </Button>
        </form>
    </div >
  );
};

export default CreateAccount;
