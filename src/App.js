import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Home1 from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route index element={<Home1/>}/>


      </Routes>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
