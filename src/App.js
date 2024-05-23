import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import NoteState from './context/notes/NoteState';
import Signup from './component/Signup';
import Login from './component/Login';
import Alert from './component/Alert';
import IsHome from './component/IsHome';

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  return (
    <>
    
    <NoteState>
      <BrowserRouter>
      <Navbar/> 
      <section> 
      <Alert className='alert' alert={alert}/> 
      <Routes> 
          <Route exact path='/ishome' element={<IsHome className='isHome' showAlert={showAlert} />} /> 
          <Route exact path='/home' element={<Home showAlert={showAlert} />} /> 
          <Route exact path='/about' element={<About showAlert={showAlert} />} /> 
          <Route exact path='/signup' element={<Signup showAlert={showAlert} />} /> 
          <Route exact path='/login' element={<Login showAlert={showAlert} />} /> 
          </Routes>
          </section>
    </BrowserRouter> 
    </NoteState>
     
    </>
      
  )
}

export default App
