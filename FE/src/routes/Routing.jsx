import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IventarioPage from '../pages/IventarioPage';

function Routing() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<IventarioPage/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default Routing