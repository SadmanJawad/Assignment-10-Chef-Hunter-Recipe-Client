import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import companyLogo from "../../../assets/companyLogo.png";
import { AuthContext } from "../../../providers/AuthProvider";
import {FaUser} from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user)
  const handleLogout = () => {
    logOut();
  };

  return (
    <div className="navbar container bg-base-100">
      <div className="navbar-start">
        {/* dropdown responsive menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
              {user && 
          <li className="tooltip tooltip-bottom" 
          data-tip={user.displayName ?  user.displayName : 'User name unavailable'}
          >
              <Link
              to='/user-profile'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
              >
              {
                user.photoURL ?   <img className="rounded-full w-10 h-10" src={user?.photoURL} alt="" /> :
                <FaUser></FaUser>
              }
              </Link>

                    </li>}
                    {user ? (
              <li>
                <Link
                  onClick={handleLogout}
                  className="btn-btn-outline btn-primary"
                >
                  Logout
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login" className="btn btn-outline btn-primary">
                  Login
                </Link>
              </li>
              
            )}
          </ul>
          
        </div>
        <Link className="w-32 ml-24">
          <img src={companyLogo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/"
              className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            >
              Home</NavLink>
          </li>
          <li>
            <NavLink to="/about"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              } 
            >About</NavLink>
          </li>

          <li>
            <NavLink to="/blog"
               className={({ isActive, isPending }) =>
               isPending ? "pending" : isActive ? "active" : ""
             } 
            >Blog</NavLink>
          </li>
          <div className="ml-56 flex gap-2 items-center">
            {/* if you have user name, photo can be shown */}
          {user && 
          <li className="tooltip tooltip-bottom" 
          data-tip={user.displayName ?  user.displayName : 'User name unavailable'}
          >
              <Link
              to='/user-profile'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
              >
              {
                user.photoURL ?   <img className="rounded-full w-10 h-10" src={user?.photoURL} alt="" /> :
                <FaUser></FaUser>
              }
              </Link>

                    </li>}
            {user ? (
              <li>
                <Link
                  onClick={handleLogout}
                  className="btn btn-outline btn-primary text-white font-medium"
                >
                  Logout
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login" className="btn btn-outline btn-primary">
                  Login
                </Link>
              </li>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
