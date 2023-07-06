import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import useLogout from "../hooks/useLogout"

import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import './navbar.scss'

const Nav = () => {

    const { auth } = useAuth()

    const logout = useLogout()
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout()
        navigate('/');
    }

    console.log(auth?.accessToken)

    /* return (
        <nav className="text-white flex bg-neutral-900 h-14 pt-4" id="nav">
            <Link className="navbar-brand text-white text text-xl pl-[3%] nav-link transition-color ease-in-out duration-200" to={"/"}>ARE Tahiti</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <ul className="flex w-[70%] justify-around ml-[3%]">
                <li className="nav-item active">
                    <Link to={'/order'} className="nav-link text-white text text-base nav-link transition-color ease-in-out duration-200" >Order A Canoe <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link to={'/about'} className="nav-link text-white text nav-link transition-color ease-in-out duration-200">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link to={'/canoes'} className="nav-link text-white text nav-link transition-color ease-in-out duration-200">The Canoes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white text nav-link transition-color ease-in-out duration-200" href="{% url 'reps' %}">Our Representatives</Link>
                </li> 
                {auth?.accessToken ? (
                    <li className="nav-link text-white text nav-link transition-color ease-in-out duration-200 hover:cursor-pointer" onClick={() => handleLogout()}>
                    Logout
                    </li>
                ) :
                (
                    <li className="nav-item">
                    <Link to={'/login'} className="nav-link text-white text nav-link transition-color ease-in-out duration-200">Rep Login</Link>
                    </li>
                )
                }
                {auth?.accessToken && 
                    <li className="nav-item">
                        <Link to={'/admin'} className="nav-link text-white text nav-link transition-color ease-in-out duration-200">Admin Page</Link>
                    </li>
                }
            </ul>
        </nav>
    ) */

  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    if (size.width > 768) {
        setMenuOpen(true)
    }
    setMenuOpen((p) => !p);
  };

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__content__logo">
          ARE Tahiti
        </Link>
        <nav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >
          <ul>
            <li onClick={menuToggleHandler}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={menuToggleHandler}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={menuToggleHandler}>
              <Link to="/canoes">The Canoes</Link>
            </li>
            <li onClick={menuToggleHandler}>
              <Link to="/order">Ordering A Canoe</Link>
            </li>

            {/* <Link to="/register">
              <button className="btn">Register</button>
            </Link>
            <Link to="/login">
              <button className="btn btn__login">Login</button>
            </Link> */}
          </ul>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Nav