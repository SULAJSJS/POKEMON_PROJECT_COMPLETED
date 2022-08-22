import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="NavBar">
      <div className="navbar">
        <div className="nav">
          <Link
            className="nav-item"
            to="/"
            style={{ textDecoration: 'none' }}
            onClick={(click) => {
              document.getElementById('1').style.fontWeight = '600';
              document.getElementById('2').style.fontWeight = '400';
              document.getElementById('3').style.fontWeight = '400';
            }}
            id="1">
            Все покемоны
          </Link>
          <Link
            className="nav-item"
            to="/help"
            style={{ textDecoration: 'none', cursor: 'pointer' }}
            onClick={(click) => {
              document.getElementById('2').style.fontWeight = '600';
              document.getElementById('1').style.fontWeight = '400';
              document.getElementById('3').style.fontWeight = '400';
            }}
            id="2">
            Помощь
          </Link>
          <Link
            className="nav-item"
            style={{ textDecoration: 'none', cursor: 'pointer' }}
            to={`/contacts`}
            onClick={(click) => {
              document.getElementById('3').style.fontWeight = '600';
              document.getElementById('2').style.fontWeight = '400';
              document.getElementById('1').style.fontWeight = '400';
            }}
            id="3">
            Контакты
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
