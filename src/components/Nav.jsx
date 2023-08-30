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
    if (size.width < 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width]);

  const menuToggleHandler = () => {
    if (size.width > 768) {
        return false
    } else {
      console.log('small menu')
      setMenuOpen((p) => !p);
    }
    
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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/canoes">The Canoes</Link>
            </li>
            <li>
              <Link to="/order">Ordering A Canoe</Link>
            </li>

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