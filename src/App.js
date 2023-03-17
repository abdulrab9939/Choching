
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import {Route,Routes} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import React, { useEffect, useState } from "react";
import { auth } from "./firebase";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        
      } else setUserName("");
    });
  }, []);
  return (

<>

<Header name={userName}/>
    <Routes>
  <Route path='/' element={<Home />}/>
  <Route exact path='/about' element={<About/>}/>
  <Route exact path='/contact' element={<Contact/>}/>
  <Route exact path='/login' element={<Login/>}/>
  <Route exact path='/register' element={<Signup/>}/>




</Routes>
<br></br>

<Footer/>

</>




 
  
   
  );
}

export default App;
