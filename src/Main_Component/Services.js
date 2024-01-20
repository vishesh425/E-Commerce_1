import { useState } from "react";
import React from 'react';
import { Outlet, Link } from 'react-router-dom'

import Navbar from '../Component/Navbar.js';
import Service from '../Component/Service.js';
import Footer from '../Component/Footer.js';

function Form() {
return (
  <div>
    <Navbar />
    <Service />
    <Footer />
  </div>  
  )
}

export default Form;