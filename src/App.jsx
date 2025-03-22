import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Account/Home';
import CreateAccount from './Account/CreateAccount';
import Login from './Account/Login';
import Profile from './Account/Profile';
import Style from './App.module.css'

const App = () => {
  return (
    <div className={Style.main}>


    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>

    </div>

  );
};

export default App;




