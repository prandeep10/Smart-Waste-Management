import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { FaRegTrashCan, FaUser } from "react-icons/fa6";
import { LuLeaf } from "react-icons/lu";
import { Link } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <LuLeaf className="icon_header" /> EcoClean
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to={"/"}>
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={"/products"}>
            <BsCart3 className="icon" /> Products
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={"/orders"}>
            <FaRegTrashCan className="icon" /> Smart Dustbins
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={"/archives"}>
            <BsFillGrid3X3GapFill className="icon" /> Recycle Centers
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={"/categories"}>
            <BsPeopleFill className="icon" /> Suppliers
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={"/users"}>
            <BsPeopleFill className="icon" /> Users
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={"/trash"}>
            <BsMenuButtonWideFill className="icon" /> Reports
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={"/profile"}>
            <BsFillGearFill className="icon" /> Setting
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
