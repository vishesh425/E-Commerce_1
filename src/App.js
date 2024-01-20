import Home from './Main_Component/Home.js';
import About from './Main_Component/About.js';
import Contact from './Main_Component/Contact.js';
  
//  **LEARNING
import Form from './Main_Component/Services.js';
import LifeCycle from './Main_Component/Teames.js';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
import './App.css';


function App() {
  return (
    <>
    <Router>
           <div className="Appp">
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/project1' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/Services' element={< Form />}></Route>
                 <Route exact path='/Team' element={< LifeCycle />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
          </Routes>
          </div>
       </Router>
       </>
  
  );
}

export default App;
