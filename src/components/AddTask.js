import { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const forText = (e) => {
    setText(e.target.value);
  };
  const forDay = (e) => {
    setDay(e.target.value);
  };
  const forReminder = (e) => {
    setReminder(e.currentTarget.checked);
  };

  const newTask = (e) => {
    e.preventDefault();
    if (!text) {
      alert('Please add text.');
      return false;
    }
    const id = Math.floor(Math.random() * 10000 + 1);
    const task = { id, text, day, reminder };
    addTask(task);
    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form className='add-form' onSubmit={newTask}>
      <div className='form-control'>
        <label htmlFor='task'>Task</label>
        <input
          type='text'
          id='task'
          placeholder='add Task'
          value={text}
          onChange={forText}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='dt'>Date and Time</label>
        <input
          type='text'
          id='dt'
          placeholder='date and time'
          value={day}
          onChange={forDay}
        />
      </div>
      <div className='form-control form-control-check'>
        <label htmlFor='reminder'>Reminder</label>
        <input
          type='checkbox'
          id='reminder'
          value={reminder}
          onChange={forReminder}
          checked={reminder}
        />
      </div>
      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  );
};

export default AddTask;
