// AboutUs.jsx - Cleaned Up with Founder Profile Only
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import founderImg from './assets/founder.jpg';


function AboutUs() {
  const location = useLocation();
  const [active, setActive] = useState('About');

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'To-Do List', path: '/todo' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div style={{ minHeight: '100vh', width: '100vw', position: 'relative', backgroundColor: '#f8f9fa' }}>
      
      {/* Header */}
      <header style={{ position: 'sticky', top: 0, left: 0, width: '100%', display: 'flex', alignItems: 'center', background: '#111', padding: '1rem 4rem', zIndex: 20 }}>
        <h1 style={{ margin: 0, fontSize: '2rem', letterSpacing: '2px', color: '#fff', fontWeight: 'bold' }}>
          MakeList
        </h1>
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

      {/* Hero Section */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #00804D 0%, #00804D 100%)',
        color: '#fff'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
            About MakeList
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: '0.9' }}>
            We are on a mission to help people organize their lives and achieve their goals 
            through intelligent task management and AI-powered productivity tools.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#333' }}>
                Our Mission
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#666', marginBottom: '1.5rem' }}>
                At MakeList, we believe that everyone deserves to feel organized and in control of their daily tasks. 
                Our platform combines the simplicity of traditional to-do lists with the power of artificial intelligence 
                to create a productivity experience that adapts to your unique workflow.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#666' }}>
                Not only are we making another task manager,but we are building a helpful tool that grows and improves with you.
              </p>
            </div>
            <div style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#00804D' }}>
                What We Stand For
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Simplicity in design, power in functionality',
                  'Empowering users to take control of their tasks',
                  'Continuous innovation and improvement',
                  'Accessibility for users of all abilities',
                  'Building tools that truly make a difference'
                ].map((value, index) => (
                  <li key={index} style={{
                    padding: '0.5rem 0',
                    borderBottom: index < 4 ? '1px solid #eee' : 'none',
                    color: '#555'
                  }}>
                    ✓ {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: '#333' }}>
            Meet Our Founder
          </h2>
          <div style={{
            background: '#f8f9fa',
            padding: '2rem',
            borderRadius: '12px',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            maxWidth: '500px',
            margin: '0 auto',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img
              src={founderImg}
              alt="Murendi Tendani Mary"
              style={{
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                marginBottom: '1rem',
                objectFit: 'cover'
              }}
            />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#333' }}>
              Murendi Tendani Mary
            </h3>
            <p style={{ fontSize: '1rem', color: '#00804D', marginBottom: '1rem', fontWeight: '500' }}>
              Founder & Visionary
            </p>
            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>
              Mary is a student studying a diploma in IT in Software Development at Rosebank College, she founded MakeList
              to help users to stay organized, focused, and fulfilled every day.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ 
        padding: '4rem 2rem', 
        background: 'linear-gradient(135deg, #6c757d 0%, #495057 100%)',
        color: '#fff' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
            Our Impact
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { number: '50K+', label: 'Active Users' },
              { number: '2M+', label: 'Tasks Completed' },
              { number: '95%', label: 'User Satisfaction' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#fff' }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '1.1rem', opacity: '0.9' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
