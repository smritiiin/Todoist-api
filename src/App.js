import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListTasks from './pages/listTasks';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/tasks" element={<ListTasks />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
