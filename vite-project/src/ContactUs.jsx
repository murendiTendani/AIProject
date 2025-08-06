import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MessageSquare, Send, User, Home, Briefcase, Calendar, Clock, Star, HelpCircle } from 'lucide-react';

export default function ContactUs() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: 'both',
    primaryUse: '',
    taskVolume: '',
    currentChallenges: '',
    desiredFeatures: '',
    message: '',
    inquiryType: 'general',
    experienceLevel: 'beginner'
  });

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'To-Do List', path: '/todo' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We\'ll get back to you within 24-48 hours to help optimize your task management experience.');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        backgroundColor: '#f8fafc'
      }}
    >
      {/* Header */}
      <header style={{ 
        position: 'sticky', 
        top: 0, 
        left: 0, 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        background: '#111', 
        padding: '1rem 4rem', 
        zIndex: 20 
      }}>
        <h1 style={{ 
          margin: 0, 
          fontSize: '2rem', 
          letterSpacing: '2px', 
          color: '#fff', 
          fontWeight: 'bold' 
        }}>
       MakeList
        </h1>
        <nav style={{ 
          marginLeft: 'auto', 
          maxWidth: '650px', 
          width: '100%', 
          display: 'flex', 
          alignItems: 'center' 
        }}>
          <ul style={{ 
            listStyle: 'none', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem', 
            margin: 0, 
            padding: '0 0 0 2rem', 
            width: '100%' 
          }}>
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



      {/* Main Content */}
      <div style={{
        paddingTop: '2rem',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem'
      }}>
        
        {/* Page Title */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          maxWidth: '800px'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#1a202c',
            marginBottom: '1rem'
          }}>
            We are Here to Help
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#4a5568',
            lineHeight: '1.6'
          }}>
            Whether you are managing personal tasks at home or running a business, 
            we want to make MakeList work perfectly for your needs.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          maxWidth: '1200px',
          width: '100%'
        }}>
          
          {/* Support Information */}
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            height: 'fit-content'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              color: '#1a202c',
              marginBottom: '1.5rem'
            }}>
              How We Support You
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Personal Task Management */}
              <div style={{
                backgroundColor: '#f0fdf4',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '2px solid #dcfce7'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{
                    backgroundColor: '#00804D',
                    borderRadius: '50%',
                    padding: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Home size={20} color="#fff" />
                  </div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '600', color: '#1a202c' }}>
                    Personal & Home Tasks
                  </h3>
                </div>
                <p style={{ margin: 0, color: '#4a5568', lineHeight: '1.5' }}>
                  Daily routines, household chores, personal goals,shopping lists
                  appointments.
                </p>
              </div>

              {/* Business Task Management */}
              <div style={{
                backgroundColor: '#fef3f2',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '2px solid #fecaca'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{
                    backgroundColor: '#dc2626',
                    borderRadius: '50%',
                    padding: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Briefcase size={20} color="#fff" />
                  </div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '600', color: '#1a202c' }}>
                    Business & Professional
                  </h3>
                </div>
                <p style={{ margin: 0, color: '#4a5568', lineHeight: '1.5' }}>
                  Project management, team coordination, client tasks, deadlines, 
                  meetings, business planning, and professional workflows.
                </p>
              </div>

              {/* Contact Information */}
              <div style={{
                borderTop: '2px solid #e5e7eb',
                paddingTop: '1.5rem'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Mail size={18} color="#00804D" />
                    <div>
                      <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: '600', color: '#1a202c' }}>Email Support</p>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: '#4a5568' }}>help@MakeList.com</p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Clock size={18} color="#00804D" />
                    <div>
                      <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: '600', color: '#1a202c' }}>Response Time</p>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: '#4a5568' }}>Usually within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              color: '#1a202c',
              marginBottom: '1.5rem'
            }}>
              Tell Us About Your Needs
            </h2>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Name and Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: '#374151'
                  }}>
                    Your Name *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User size={18} style={{
                      position: 'absolute',
                      left: '0.75rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#9ca3af'
                    }} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.75rem 0.75rem 3rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#00804D'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: '#374151'
                  }}>
                    Email Address *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={18} style={{
                      position: 'absolute',
                      left: '0.75rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#9ca3af'
                    }} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.75rem 0.75rem 3rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#00804D'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>
                </div>
              </div>

              {/* User Type */}
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#374151'
                }}>
                  How do you primarily use MakeList? *
                </label>
                <select
                  name="userType"
                  value={formData.userType}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#00804D'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                >
                  <option value="personal">Personal & Home Tasks Only</option>
                  <option value="business">Business & Professional Tasks Only</option>
                  <option value="both">Both Personal and Business Tasks</option>
                </select>
              </div>

              {/* Primary Use and Experience Level */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: '#374151'
                  }}>
                    What's your main focus?
                  </label>
                  <select
                    name="primaryUse"
                    value={formData.primaryUse}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#00804D'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  >
                    <option value="">Select one...</option>
                    <option value="daily-routines">Daily Routines</option>
                    <option value="household">Household Management</option>
                    <option value="personal-goals">Personal Goals & Projects</option>
                    <option value="team-projects">Team Projects</option>
                    <option value="client-work">Client Work & Deadlines</option>
                    <option value="business-planning">Business Planning</option>
                    <option value="mixed-workflow">Mixed Personal/Business</option>
                  </select>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: '#374151'
                  }}>
                    Experience Level
                  </label>
                  <select
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#00804D'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  >
                    <option value="beginner">New to task management</option>
                    <option value="intermediate">Some experience</option>
                    <option value="advanced">Very experienced</option>
                  </select>
                </div>
              </div>

              {/* Task Volume */}
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#374151'
                }}>
                  How many tasks do you typically manage?
                </label>
                <select
                  name="taskVolume"
                  value={formData.taskVolume}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#00804D'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                >
                  <option value="">Select range...</option>
                  <option value="few">Just a few (1-10 per day)</option>
                  <option value="moderate">Moderate (10-25 per day)</option>
                  <option value="many">Many (25-50 per day)</option>
                  <option value="heavy">Heavy load (50+ per day)</option>
                </select>
              </div>

              {/* Inquiry Type */}
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#374151'
                }}>
                  What can we help you with? *
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#00804D'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                >
                  <option value="general">General Question</option>
                  <option value="feature-request">Feature Request</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="workflow-help">Workflow Optimization</option>
                  <option value="integration">Integration Help</option>
                  <option value="feedback">Feedback & Suggestions</option>
                  <option value="business-inquiry">Business Partnership</option>
                </select>
              </div>

              {/* Current Challenges */}
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#374151'
                }}>
                  What challenges are you facing with task management?
                </label>
                <textarea
                  name="currentChallenges"
                  value={formData.currentChallenges}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="e.g., Forgetting deadlines, organizing priorities, balancing work and personal tasks..."
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#00804D'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              {/* Desired Features */}
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#374151'
                }}>
                  What features would make MakeList perfect for you?
                </label>
                <textarea
                  name="desiredFeatures"
                  value={formData.desiredFeatures}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="e.g., Better reminders, team collaboration, calendar integration, mobile app..."
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#00804D'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              {/* Main Message */}
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#374151'
                }}>
                  Your Message *
                </label>
                <div style={{ position: 'relative' }}>
                  <MessageSquare size={18} style={{
                    position: 'absolute',
                    left: '0.75rem',
                    top: '1rem',
                    color: '#9ca3af'
                  }} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    placeholder="Tell us more about how we can help improve your task management experience..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.75rem 0.75rem 3rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#00804D'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  backgroundColor: '#00804D',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '1rem 2rem',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'background-color 0.2s, transform 0.1s',
                  marginTop: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#006b42';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#00804D';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <Send size={20} />
                Send Message
              </button>

              <p style={{
                fontSize: '0.9rem',
                color: '#6b7280',
                textAlign: 'center',
                margin: '0.5rem 0 0 0',
                lineHeight: '1.4'
              }}>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}