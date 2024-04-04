import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import Products from './pages/products/Products';
import SmartDustbin from './pages/smartdustbins/SmartDustbin';
import RecycleCenters from './pages/recyclecenters/RecycleCenters';

const App = () => {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <Router>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Define routes for other components */}
          {/* For example: */}
          <Route path="/products" element={<Products/>} />
          <Route path="/smart-dustbins" element={<SmartDustbin/>} />
          <Route path="/recycle-centers" element={<RecycleCenters/>} />
          {/* <Route path="/suppliers" element={<Suppliers />} /> */}
          {/* <Route path="/user" element={<User />} /> */}
          {/* <Route path="/reports" element={<Reports />} /> */}
          {/* <Route path="/settings" element={<Settings />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App;
