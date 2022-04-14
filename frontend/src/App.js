//Libraries
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


//Routes
import Admin from './Routes/Admin'
import Register from './Routes/Register'
import Login from './Routes/Login'

export default function App() {
    

    return (
        
        <Router>
            <Routes>
                <Route path="/admin" element={<Admin />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
        
    )


 }