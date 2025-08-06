// Home.jsx - Updated with React Router Links
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Chatbot from './Chatbot';

function Home() {
  const location = useLocation();
  const [active, setActive] = useState('Home');
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'To-Do List', path: '/todo' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <header style={{ position: 'absolute', top: 0, left: 0, width: '100%', display: 'flex', alignItems: 'center', background: '#111', padding: '1rem 4rem', zIndex: 20 }}>
        <h1 style={{ margin: 0, fontSize: '2rem', letterSpacing: '2px', color: '#fff', fontWeight: 'bold' }}>MakeList</h1>
        <nav style={{ marginLeft: 'auto', maxWidth: '650px', width: '100%', display: 'flex', alignItems: 'center' }}>
          <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '1rem', margin: 0, padding: '0 0 0 2rem', width: '100%' }}>
            {navItems.map(item => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  style={{
                    padding: '0.5rem 1.5rem',
                    display: 'block',
                    whiteSpace: 'nowrap',
                    color: '#fff',
                    background: location.pathname === item.path ? '#00804D' : 'transparent',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'background 0.2s, color 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    if (location.pathname !== item.path) {
                      e.target.style.background = '#00804D';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== item.path) {
                      e.target.style.background = 'transparent';
                    }
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Top Right Buttons */}
      <div style={{ position: 'absolute', top: '5.5rem', right: '4rem', display: 'flex', gap: '1rem', zIndex: 30 }}>
        <button style={{ background: '#00804D', color: '#fff', border: 'none', borderRadius: '4px', padding: '0.5rem 1.5rem', fontWeight: '500', cursor: 'pointer', fontSize: '1rem' }}>Sign Up</button>
        <button style={{ background: '#00804D', color: '#fff', border: 'none', borderRadius: '4px', padding: '0.5rem 1.5rem', fontWeight: '500', cursor: 'pointer', fontSize: '1rem' }}>Login</button>
      </div>

      {/* Background Image */}
      <img
        src="https://plus.unsplash.com/premium_photo-1683309568772-57011d6c1b7b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8fDA%3D"
        alt="Background"
        style={{
          position: 'absolute',
          top: '5.5rem',
          left: 0,
          width: '100vw',
          minHeight: 'calc(110vh - 5.5rem)',
          height: 'calc(120vh - 5.5rem + 100px)',
          objectFit: 'cover',
          zIndex: 5,
          boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
        }}
      />
      
      {/* Home Page Message */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        padding: '2rem',
        borderRadius: '16px',
        maxWidth: '800px',
        textAlign: 'center',
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#222' }}>
          Welcome to MakeList – Your Smart To-Do List Helper!
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.6' }}>
          Got things to do? We've got your back.<br />
          Add tasks, get friendly reminders, and chat with your personal AI assistant to plan your day ahead.<br /><br />
          <strong>Plan it. Get reminded. Stay ahead with a little help from your AI buddy.</strong>
        </p>
      </div>
    </div>
  );
}

export default Home;