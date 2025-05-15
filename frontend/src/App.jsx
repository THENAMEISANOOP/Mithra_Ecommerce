import React from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home'
import {Toaster} from "sonner";
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

const App = () => {
  return (
    <BrowserRouter>
    <Toaster position="top-right"/>
    <Routes>
      <Route path='/' element={<UserLayout/>}>
       {/* user Layout */}
       <Route index element={<Home/>}/>

       {/* login */}
       <Route path='login' element={<Login/>}/>

       {/* register */}
       <Route path='register' element={<Register/>}/>

       {/* profile user  */}
       <Route path='profile' element={<Profile/>}/>
       </Route>
        
      <Route> {/* admin Layout */} </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
