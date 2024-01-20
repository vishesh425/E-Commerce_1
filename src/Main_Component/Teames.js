import { useState } from "react";
import React from 'react';
import { Outlet, Link } from 'react-router-dom'

import Navbar from '../Component/Navbar.js';
import Team from '../Component/Team.js';
import Footer from '../Component/Footer.js';

function LifeCycle() {
return (
  <div>
    <Navbar />
    <Team/>
    <Footer />
  </div>  
  )
}

export default LifeCycle;