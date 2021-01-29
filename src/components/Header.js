const Header = ({ forToggle, toggleAdd }) => {
  return (
    <header className='header'>
      <h1>Task Tracker App</h1>
      <button className={`btn ${toggleAdd ? 'close' : ''}`} onClick={forToggle}>
        {toggleAdd ? 'Close' : 'Add'}
      </button>
    </header>
  );
};

export default Header;
