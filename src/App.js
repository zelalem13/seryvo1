 
 import React, {useState} from 'react';
import Navbar from './components/Navbar/Navbar'; 
import Header from './continers/Header/Header'; 
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import LoggedIn from './components/LoggedIn/LoggedIn';
import './App.css';
 
import {Routes, Route} from 'react-router-dom';

const  App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  return (
    <div className="gradient__bg">
  
        <Navbar />
        
        <Routes>
        <Route			
            path="/"
            element={(
              <>
                 <Header />
                 
              </>
            )}
          />
          <Route path="/login" element={ 
             <>
               {isLoggedIn ? (
        
               <LoggedIn setIsLoggedIn={setIsLoggedIn} />
       
               ) : (
               <Login setIsLoggedIn={setIsLoggedIn} />
               )}
             </>
           } />
          <Route path="/signup" element={<Signup />} />
           
        </Routes>
        
      
       
    </div>
  );
}
export default App;
