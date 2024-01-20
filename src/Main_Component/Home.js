import React from 'react';
import Header from '../Component/Header.js';
import Section from '../Component/Section.js';
import Service from '../Component/Service.js';
import Project from '../Component/Project.js';
import Team from '../Component/Team.js';
import Client from '../Component/Client.js';
import Footer from '../Component/Footer.js';

function Home() { 
 
  return (
    <div>
      <Header/>
      <Section/>
      <Service/>
      <Project/>
      <Team/>
      <Client/>
      <Footer/>

    </div>
      )
}

export default Home;