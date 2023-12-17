import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Admin from './pages/Admin/Admin';
import Home from './pages/Home/Home';
import Password from './pages/Password/Password';

function App () {
  const  [token, settoken] = useState(window.localStorage.getItem('token'))
  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Home />} />
          {
          token ? (
            <Route path='/password' element={<Admin />} />
            ) : (
              <Route path='/password' element={ <Password settoken={settoken} />} />
              )
          }  
        </Routes>
      </Router>

    </>
  );
}

export default App;
