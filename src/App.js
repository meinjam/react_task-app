import { useState } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Go to mosque.',
      day: 'Jan 27th at 12:20 PM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Buy Meswak..',
      day: 'Jan 27th at 07:00 PM',
      reminder: false,
    },
    {
      id: 3,
      text: 'Quran Tilwat.',
      day: 'Jan 28th at 06:00 AM',
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    // console.log(task);
    setTasks([...tasks, task]);
  };

  //Delete Task
  const deleteTask = (id) => {
    // console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Double Click
  const doubleClick = (id) => {
    console.log(id);
  };

  return (
    <div className='container'>
      <Header />
      <AddTask addTask={addTask} />
      {tasks.length ? (
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          doubleClick={doubleClick}
        />
      ) : (
        'No tasks found.'
      )}
    </div>
  );
}

export default App;
