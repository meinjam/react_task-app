import { CgClose } from 'react-icons/cg';

const Task = ({ task, deleteTask, doubleClick }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => doubleClick(task.id)}
    >
      <h3>
        {task.text}{' '}
        <CgClose style={buttonStyle} onClick={() => deleteTask(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

const buttonStyle = {
  color: 'red',
  cursor: 'pointer',
};

export default Task;
