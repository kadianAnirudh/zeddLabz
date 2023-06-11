import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Task1A from './tasks/Task1A';
import HomePage from './tasks/HomePage';
import Task1B from './tasks/Task1B';
import Task2 from './tasks/Task2';
import Task5 from './tasks/Task5';
import Task3 from './tasks/Task3';
import Task4 from './tasks/Task4';
import Usestated from './tasks/Usestatecomp';
import Useeffected from './tasks/UseEffect';
import UsecontextComponent from './tasks/useContextComponent';
import Usecallback from './tasks/UseCallback';
import { MyContextProvider } from './contexts/contextProvider';


function App() {
  return (
    <MyContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/task1a" element={<Task1A />} />
          <Route path="/task1b" element={<Task1B />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />
          <Route path="/task5" element={<Task5 />} />
          <Route path="/task4" element={<Task4 />} />
          <Route path="/usestate" element={<Usestated/>} />
          <Route path="/useeffect" element={<Useeffected />} />
          <Route path="/usecallback" element={<Usecallback />} />
          <Route path="/usecontext" element={<UsecontextComponent />} />
        </Routes>
      </Router>
    </MyContextProvider>
  );
}

export default App;
