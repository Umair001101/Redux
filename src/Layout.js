import React from 'react';
import { Link } from 'react-router-dom';
const Layout = ({ pages }) => {
  return (
    <div className="layout-container">
      <header className="header">
        <nav className="navbar">
          <ul className="nav-list">
            <li><Link to="/page1" className="nav-link">Iphone</Link></li>
            <li><Link to="/page2" className="nav-link">Android</Link></li>
            <li><Link to="/page3" className="nav-link">Total</Link></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">{pages}</main>
      <style>{`
        /* General Layout */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Arial', sans-serif;
        }

        .layout-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          background-color: #f4f7fc;
        }
          
        .header {
          background-color: black;
          color: white;
          padding: 1rem 2rem;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-list {
          list-style: none;
          display: flex;
          gap: 1.5rem;
        }

        .nav-link {
          text-decoration: none;
          color: white;
          font-size: 1.2rem;
          transition: color 0.3s;
        }

        .nav-link:hover {
          color: #ffcc00;  /* Highlight color on hover */
        }

        .main-content {
          flex: 1;
          padding: 2rem;
          background-color: white;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          margin: 20px;
          border-radius: 8px;
        }
        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            align-items: flex-start;
          }

          .nav-list {
            flex-direction: column;
            gap: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
