import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add';
import List from './pages/List';
import Login from './components/Login';
import Orders from './pages/Orders';
import Contact from './pages/Contact';
import Users from './pages/Users';
import Dashboard from './pages/dashboard';

export const backend_url = import.meta.env.VITE_BACKEND_URL
export const currency = "$"

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "")

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  return (
    <main>
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <div className='bg-primary text-[#404040]'>
          <div className='mx-auto  flex flex-col sm:flex-row'>
            <Sidebar setToken={setToken} />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/add' element={<Add token={token} />} />
              <Route path='/user' element={<Users token={token} />} />

              <Route path='/list' element={<List token={token} />} />
              <Route path='/orders' element={<Orders token={token} />} />
              <Route path='/contact' element={<Contact token={token} />} />

             
            </Routes>
          </div>
        </div>
      )}
    </main>
  )
}

export default App