import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import Signup from './componets/Signup.jsx'
import Login from './componets/Login.jsx'
import Home from './componets/Home.jsx'
import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      {/* <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
   
    </>
  )
}

export default App
