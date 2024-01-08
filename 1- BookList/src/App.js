import './App.css';
import Header from './Component/Header/Header'
import AddBook from './Component/AddBook/AddBook'

function App() {
  return (
    <div className="app">
      <Header title="Venus JS Book List" />
      <AddBook />
    </div>
  );
}

export default App;
