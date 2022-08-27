import React from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import {IoPerson,IoPricetag,IoHome,IoLogOut} from "react-icons/io5";
import {useDispatch,useSelector} from "react-redux";
import {LogOut,reset} from "../features/AuthSlice";
import logo from "../logo/web1.jpg"

const Sidebar = () => {
  const dispatch=useDispatch();
  const navigate =useNavigate();
  const {user} = useSelector((state ) => state.auth);

  const logout = ()=>{
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  }
  return (
    <div className=''>
<aside className="menu pl-2 mt-5 has-shadow has-background-link">
  <p className="menu-label has-text-white">
    General
  </p>
  <ul className="menu-list">
    <li><NavLink to={"/dashboard"} className="has-text-light"><IoHome className='has-text-white'/>Dashboard</NavLink></li>
    <li><NavLink to={"/products"} className="has-text-light"><IoPricetag className='has-text-white'/>Products</NavLink></li>
  </ul>
  {user && user.role === "admin" &&(
  <div>
  <p className="menu-label has-text-white">Admin</p>
  <ul className="menu-list">
  <li>
    <NavLink to={"/users"} className="has-text-light"><IoPerson/>Users</NavLink>
    </li>
  </ul>
  </div>
  )};
  <div className='mb-10'>
  <p className="menu-label has-text-white">
    settings
  </p>
  <ul className="menu-list mb-2 mt-10">
    <li><button onClick={logout} className='button is-dark'><IoLogOut className='has-text-light'/>log out</button></li>
  </ul>
  <figure className='image is-square'>
    <img src={logo} alt=" logo" className='image is-rounded'/>
    </figure>
    </div>
</aside>
</div>
  );
};

export default Sidebar;