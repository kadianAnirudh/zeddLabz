import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Task1A from './tasks/Task1A';
import HomePage from './tasks/HomePage';
import Task1B from './tasks/Task1B';
import Task2 from './tasks/Task2';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
    <Route path="/" Component={HomePage} />
    <Route path="/task1a" Component={Task1A} />
    <Route path="/task1b" Component={Task1B} />
    <Route path="/task2" Component={Task2} />
      </Routes>
    </Router>
    </>
  )
}

export default App
