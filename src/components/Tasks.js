import Task from './Task';

const Tasks = ({ tasks, deleteTask, doubleClick }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          doubleClick={doubleClick}
        />
      ))}
    </div>
  );
};

export default Tasks;
