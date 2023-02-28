import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './screens/home';
import { Ressources } from './screens/ressources';
import {Routes, Route, NavLink} from 'react-router-dom';
import { Contact } from './screens/Contact';

function App() {
  return (
   <div className='container mt-10'>
      <header className='mb-5 bg-yellow-50 border-2 border-black'>
       
        
        <nav className='flex  '>
            <div className='flex items-stretch '>
              <img src="./logo192.png" alt="" className='w-24'/>
              <p className='mt-6 mx-2 text-5xl font-bold'>React-One</p>
            </div>
            <NavLink  className='mr-3 mt-10 ml-10 ' to='/'  style={({isActive}) =>({fontWeight: isActive ? 'bold' : 'normal'})}>Accueil</NavLink><br></br>
            <NavLink  className='mr-3 mt-10' to='/ressources' style={({isActive}) =>({fontWeight: isActive ? 'bold' : 'normal'})}>Ressources</NavLink><br></br>
            <NavLink  className='mr-3 mt-10' to='/contact' style={({isActive}) =>({fontWeight: isActive ? 'bold' : 'normal'})}>Contact</NavLink>
        </nav>
     </header>
  
      
      <Routes>
          <Route path='/' element={<Home/> }/>
          <Route path='/ressources' element={<Ressources/> }/>
          <Route path='/contact' element={<Contact/> }/>
          
      </Routes>

      <footer >
        <Routes>
          
        </Routes>

      </footer>
   </div>
  );
}

export default App;
