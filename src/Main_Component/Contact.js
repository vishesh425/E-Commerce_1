import { useState } from "react";
import React from 'react';
import { Outlet, Link } from 'react-router-dom'

import Navbar from '../Component/Navbar.js';
import Props1 from '../Component/Form.js';
import Footer from '../Component/Footer.js';

function Contact() {
return (
  <div>
    <Navbar />
    <Props1/>
    <Footer />
  </div>  
  )
}

export default Contact;