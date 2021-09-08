import './App.css';
function App() {
  return (
    <div className="App">
      <header>
        <h1>Notepad</h1>
      </header>
      <hr></hr>
      <div className="content">
        <p>empty list</p>
        <ul>
          <li>Task 4</li>
          <li>Task 1</li>
          <li>Task 1</li>
          <li>Task 1</li>
          <li>Task 1</li>
        </ul>
      </div>
      <hr></hr>
      <footer>
        <button>Next</button>
        <p className="page-number">page 1</p>
        <button>Previos</button>
      </footer>
    </div>
  );
}


export default App;