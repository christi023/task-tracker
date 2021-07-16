import React, { useState, useEffect } from 'react';
import AddTask from './Components/AddTask/AddTask';
import Button from './Components/Button/Button';
//import DarkMode from './Components/DarkMode/DarkMode';
import Header from './Components/Header/Header';

import Tasks from './Components/Tasks/Tasks';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ]);

  useEffect(() => {
    //specify a localStorage item to check whether the user is currently in dark mode when the page loads
    const json = localStorage.getItem('site-dark-mode');
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    //If this information exists in localStorage, we will parse it into JavaScript and set the value of darkMode based on what was stored. If the boolean value for darkMode is changed, these changes will be converted into JSON and stored in localStorage.
    const json = JSON.stringify(darkMode);
    localStorage.setItem('site-dark-mode', json);
  }, [darkMode]);

  // Add Task
  const addTask = (task) => {
    // get a random id
    const id = Math.floor(Math.random() * 10000) + 1;
    //console.log(id);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    // setting the task to the filtered task
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
  };

  return (
    <React.Fragment>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <div className="container1">
          <span style={{ color: darkMode ? 'grey' : 'yellow' }}>☀︎</span>
          <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"> </span>
            </label>
          </div>
          <span style={{ color: darkMode ? '#c96dfd' : 'grey' }}>☽</span>
        </div>
        <div>
          <h1>Cool its {darkMode ? 'Dark' : 'Light'} Mode </h1>
        </div>

        <div className="container">
          <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
          {showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? (
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
          ) : (
            'No Tasks To Show'
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
