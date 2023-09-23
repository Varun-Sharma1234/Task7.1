import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Pagenav from './Pagenav'; 
import Home from './Home';
import Pagelogin from './Pagelogin';
import Pagesignup from './Pagesignup';
import { auth } from './Firebase';


function Routing() {
  

  return (
    <>
      <Pagenav />
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Pagelogin />}/>
          <Route path="/signup" element={<Pagesignup />} />
        </Routes>
      </div>
    </>
  );
}

export default Routing;