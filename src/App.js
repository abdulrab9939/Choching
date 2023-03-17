
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import {Route,Routes} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Contact2 from './Components/Contact2';
// import Feedback from './Components/Feedback';
import Body from './Components/Body';
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

  {/* <Route exact path='/feedback' element={<Feedback/>}/>  Problem accured addeventlistener */} 

  <Route exact path='/contact2' element={<Contact2/>}/>




</Routes>
<br></br>
<Body/>
<Footer/>

</>




 
  
   
  );
}

export default App;
