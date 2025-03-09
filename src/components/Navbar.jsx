'use client'
import Link from 'next/link';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import ThemePicker from './ThemePicker';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo">
          <img src={`${!darkMode ? "/LogoBlack.png" : "/LogoWhite.png"}`} alt="" width={220} />
        </Link>
        
        <div clsasName="nav-links"> 
            <Link href="/auth/login">Login</Link>
            <Link href="/auth/register">regis</Link>
        </div>

        <div className="nav-controls">
          <button 
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FiSun className="theme-icon" />
            ) : (
              <FiMoon className="theme-icon" />
            )}
          </button>
          <ThemePicker />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;