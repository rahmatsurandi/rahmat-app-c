import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../logo/web2.jpg";
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";
import {LogOut,reset} from "../features/AuthSlice";

const Navbar = () => {
  const dispatch=useDispatch();
  const navigate =useNavigate();
  const {user} = useSelector((state ) =>state.auth);

  const logout = ()=>{
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  }
  return (
    <div>
        <nav className="navbar is-fixed-top has-shadow has-background-link" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <NavLink to={"/dashboard"} className="navbar-item">
              <img src={logo} width="50" height="50" alt='logo'/>
              <h1 className='ml-4 has-text-white'><b>Welcome to my web</b></h1>
              
            </NavLink>
        
            <a href='!#' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <button onClick={logout} className="button is-light">
                    Log out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
    </div>
  );
};

export default Navbar