
import React, { useState } from 'react';

function App() {
  
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  
  const handleAddTask = () => {
    if (input.trim() === '') return; // Blocks empty items from being added
    
    const newTask = { 
      id: Date.now(), // Generates a unique ID using the current timestamp
      text: input, 
      isDone: false 
    };
    
    setTasks([...tasks, newTask]); 
    setInput('');
  };

  
  const handleDeleteTask = (idToDelete) => {
    // Keeps every single task EXCEPT the one matching the clicked ID
    const remainingTasks = tasks.filter(task => task.id !== idToDelete);
    setTasks(remainingTasks);
  };

 
  const handleToggleDone = (idToToggle) => {
  
    const updatedTasks = tasks.map(task => {
      if (task.id === idToToggle) {
        return { ...task, isDone: !task.isDone }; 
      }
      return task; 
    });
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: 'auto' }}>
      <h2>My To-Do List</h2>

      {/* Input Field and Add Button */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Enter a task..." 
          style={{ padding: '8px', fontSize: '16px', marginRight: '10px', width: '200px' }}
        />
        <button 
          onClick={handleAddTask}
          style={{ padding: '8px 12px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Add
        </button>
      </div>

      {}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li 
            key={task.id} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '10px', 
              borderBottom: '1px solid #eee',
              backgroundColor: task.isDone ? '#f9f9f9' : 'transparent'
            }}
          >
            {}
            <span 
              onClick={() => handleToggleDone(task.id)}
              style={{ 
                textDecoration: task.isDone ? 'line-through' : 'none', 
                color: task.isDone ? '#888' : '#333',
                cursor: 'pointer',
                flex: 1
              }}
            >
              {task.text}
            </span>
            
            {/* DELETE BUTTON */}
            <button 
              onClick={() => handleDeleteTask(task.id)}
              style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;