import React, {useEffect} from 'react'
import {Routes, Route, useLocation } from 'react-router-dom';
import './App.css'

//COMPONENTS
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// PAGES
import Home from './pages/Home'
import Journeys from './pages/Journeys'
import DomesticTours from './pages/DomesticTours'
import ForeignTours from './pages/ForeignTours'
import Trip from './pages/Trip'

function App() {

  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  return (
    
      <div>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/journeys" element={<Journeys/>}/>
            <Route exact path="/domestic" element={<DomesticTours/>}/>
            <Route exact path="/foreign" element={<ForeignTours/>}/>
            <Route exact path="/trip" element={<Trip/>}/>

        </Routes>
        <Footer/>
      </div>
  )
}

export default App
