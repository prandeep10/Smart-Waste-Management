import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsMenuButtonWideFill,
  BsFillGearFill
} from 'react-icons/bs';
import { FaTrashAlt, FaUser } from 'react-icons/fa';
import { LuLeaf } from 'react-icons/lu';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
      <aside id="sidebar" className={openSidebarToggle ? 'sidebar-responsive' : ''}>
        <div className='sidebar-title'>
          <div className='sidebar-brand'>
            <LuLeaf className='icon_header'/> EcoClean
          </div>
          <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
          <li className='sidebar-list-item'>
            <Link to="/">
              <BsGrid1X2Fill className='icon'/> Dashboard
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="/products">
              <BsCart3 className='icon'/> Products
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="/smart-dustbins">
              <FaTrashAlt className='icon'/> Smart Dustbins
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="/recycle-centers">
              <BsFillGrid3X3GapFill className='icon'/> Recycle Centers
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="/suppliers">
              <BsPeopleFill className='icon'/> Suppliers
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="/user">
              <FaUser className='icon'/> User
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="/reports">
              <BsMenuButtonWideFill className='icon'/> Reports
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="/settings">
              <BsFillGearFill className='icon'/> Setting
            </Link>
          </li>
        </ul>
      </aside>
  )
}

export default Sidebar;
