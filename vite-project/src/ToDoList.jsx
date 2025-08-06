import React, { useState } from 'react';
import Chatbot from './Chatbot';


function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newTime, setNewTime] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editTask, setEditTask] = useState('');
  const [editTime, setEditTime] = useState('');

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'To-Do List', path: '/todo' },
    { name: 'Contact', path: '/contact' }
  ];

  // Add new task
  const addTask = () => {
    if (newTask.trim() && newTime) {
      const task = {
        id: Date.now(),
        text: newTask.trim(),
        time: newTime,
        completed: false,
        createdAt: new Date().toLocaleDateString()
      };
      setTasks([...tasks, task]);
      setNewTask('');
      setNewTime('');
    }
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Start editing
  const startEdit = (task) => {
    setEditingId(task.id);
    setEditTask(task.text);
    setEditTime(task.time);
  };

  // Save edit
  const saveEdit = () => {
    if (editTask.trim() && editTime) {
      setTasks(tasks.map(task => 
        task.id === editingId 
          ? { ...task, text: editTask.trim(), time: editTime }
          : task
      ));
      setEditingId(null);
      setEditTask('');
      setEditTime('');
    }
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditingId(null);
    setEditTask('');
    setEditTime('');
  };

  return (
    <>
      <div style={{
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: '#f8f9fa'
    }}>

      
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
                <a
                  href={item.path}
                  style={{
                    padding: '0.5rem 1.5rem',
                    display: 'block',
                    whiteSpace: 'nowrap',
                    color: '#fff',
                    background: item.name === 'To-Do List' ? '#00804D' : 'transparent',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'background 0.2s, color 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    if (item.name !== 'To-Do List') {
                      e.target.style.background = '#00804D';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (item.name !== 'To-Do List') {
                      e.target.style.background = 'transparent';
                    }
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        {/* Title */}
        <h1 style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#333'
        }}>
          My To-Do List
        </h1>

        {/* Add Task Form */}
        <div style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <h3 style={{
            marginBottom: '1rem',
            color: '#333',
            fontSize: '1.3rem'
          }}>
            Add New Task
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr auto',
            gap: '1rem',
            alignItems: 'end'
          }}>
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#555',
                fontWeight: '500'
              }}>
                Task Description
              </label>
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter your task..."
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #e0e0e0',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#00804D'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                onKeyPress={(e) => e.key === 'Enter' && addTask()}
              />
            </div>
            
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#555',
                fontWeight: '500'
              }}>
                Completion Time
              </label>
              <input
                type="datetime-local"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #e0e0e0',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#00804D'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>
            
            <button
              onClick={addTask}
              style={{
                background: '#00804D',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'background 0.2s',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => e.target.style.background = '#00804D'}
              onMouseLeave={(e) => e.target.style.background = '#00804D'}
            >
              Add Task
            </button>
          </div>
        </div>

        {/* Task Statistics */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            background: '#00804D',
            color: '#fff',
            padding: '1rem',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
              {tasks.length}
            </div>
            <div>Total Tasks</div>
          </div>
          <div style={{
            background: '#28a745',
            color: '#fff',
            padding: '1rem',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
              {tasks.filter(task => task.completed).length}
            </div>
            <div>Completed</div>
          </div>
          <div style={{
            background: '#ffc107',
            color: '#333',
            padding: '1rem',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
              {tasks.filter(task => !task.completed).length}
            </div>
            <div>Pending</div>
          </div>
        </div>

        {/* Tasks List */}
        <div style={{
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          {tasks.length === 0 ? (
            <div style={{
              padding: '3rem',
              textAlign: 'center',
              color: '#666'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</div>
              <h3 style={{ marginBottom: '0.5rem' }}>No tasks yet!</h3>
              <p>Add your first task above to get started.</p>
            </div>
          ) : (
            <div>
              <div style={{
                background: '#f8f9fa',
                padding: '1rem 2rem',
                borderBottom: '1px solid #e0e0e0',
                fontWeight: 'bold',
                color: '#333'
              }}>
                Your Tasks ({tasks.length})
              </div>
              
              {tasks.map((task, index) => (
                <div key={task.id} style={{
                  padding: '1.5rem 2rem',
                  borderBottom: index < tasks.length - 1 ? '1px solid #f0f0f0' : 'none',
                  background: task.completed ? '#f8fff8' : '#fff'
                }}>
                  {editingId === task.id ? (
                    // Edit Mode
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '2fr 1fr auto',
                      gap: '1rem',
                      alignItems: 'center'
                    }}>
                      <input
                        type="text"
                        value={editTask}
                        onChange={(e) => setEditTask(e.target.value)}
                        style={{
                          padding: '0.5rem',
                          border: '2px solid #00804D',
                          borderRadius: '4px',
                          fontSize: '1rem'
                        }}
                      />
                      <input
                        type="datetime-local"
                        value={editTime}
                        onChange={(e) => setEditTime(e.target.value)}
                        style={{
                          padding: '0.5rem',
                          border: '2px solid #00804D',
                          borderRadius: '4px',
                          fontSize: '1rem'
                        }}
                      />
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button
                          onClick={saveEdit}
                          style={{
                            background: '#28a745',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '0.5rem 1rem',
                            cursor: 'pointer',
                            fontSize: '0.9rem'
                          }}
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelEdit}
                          style={{
                            background: '#6c757d',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '0.5rem 1rem',
                            cursor: 'pointer',
                            fontSize: '0.9rem'
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    // View Mode
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'auto 1fr auto',
                      gap: '1rem',
                      alignItems: 'center'
                    }}>
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleComplete(task.id)}
                        style={{
                          width: '18px',
                          height: '18px',
                          cursor: 'pointer'
                        }}
                      />
                      
                      <div>
                        <div style={{
                          fontSize: '1.1rem',
                          color: task.completed ? '#666' : '#333',
                          textDecoration: task.completed ? 'line-through' : 'none',
                          marginBottom: '0.25rem'
                        }}>
                          {task.text}
                        </div>
                        <div style={{
                          fontSize: '0.9rem',
                          color: '#666',
                          display: 'flex',
                          gap: '1rem'
                        }}>
                          <span>📅 Due: {new Date(task.time).toLocaleString()}</span>
                          <span>➕ Added: {task.createdAt}</span>
                        </div>
                      </div>
                      
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button
                          onClick={() => startEdit(task)}
                          style={{
                            background: '#007bff',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '0.5rem 1rem',
                            cursor: 'pointer',
                            fontSize: '0.9rem'
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteTask(task.id)}
                          style={{
                            background: '#dc3545',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '0.5rem 1rem',
                            cursor: 'pointer',
                            fontSize: '0.9rem'
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
          )}
        </div>
        
      </div>
      
    </div>
    <Chatbot/>
    </>
    

  );
}

export default TodoList;