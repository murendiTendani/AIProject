
import React, { useState } from 'react';

function Home() {
  const [active, setActive] = useState('Home');
  const navItems = [
    'Home',
    'About',
    'To-Do List',
    'Contact'
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
      <header style={{ position: 'absolute', top: 0, left: 0, width: '100%', display: 'flex', alignItems: 'center', background: '#111', padding: '1rem 4rem', zIndex: 20 }}>
        <h1 style={{ margin: 0, fontSize: '2rem', letterSpacing: '2px', color: '#fff', fontWeight: 'bold' }}>Stratify</h1>
        <nav style={{ marginLeft: 'auto', maxWidth: '650px', width: '100%', display: 'flex', alignItems: 'center' }}>
          <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '1rem', margin: 0, padding: '0 0 0 2rem', width: '100%' }}>
            {navItems.map(item => (
              <li key={item}>
                <a
                  href="#"
                  style={{
                    padding: '0.5rem 1.5rem',
                    display: 'block',
                    whiteSpace: 'nowrap',
                    color: '#fff',
                    background: active === item ? '#007bff' : 'transparent',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'background 0.2s, color 0.2s'
                  }}
                  onClick={() => setActive(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div style={{ position: 'absolute', top: '5.5rem', right: '4rem', display: 'flex', gap: '1rem', zIndex: 30 }}>
        <button style={{ background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', padding: '0.5rem 1.5rem', fontWeight: '500', cursor: 'pointer', fontSize: '1rem' }}>Sign Up</button>
        <button style={{ background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', padding: '0.5rem 1.5rem', fontWeight: '500', cursor: 'pointer', fontSize: '1rem' }}>Login</button>
      </div>
      <img
        src="https://plus.unsplash.com/premium_photo-1683309568772-57011d6c1b7b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8fDA%3D"
        alt="Background"
        style={{
          position: 'absolute',
          top: '5.5rem',
          left: 0,
          width: '100vw',
          minHeight: 'calc(100vh - 5.5rem)',
          height: 'calc(100vh - 5.5rem + 100px)',
          objectFit: 'cover',
          zIndex: 5,
        }}
      />
    </div>
  );
}
export default Home;