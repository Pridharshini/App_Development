import './App.css';
import Entry from './pages/Entry';
import Register from './pages/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import Elogin from './pages/Elogin';
import ALogin from './pages/ALogin';
import Home from './pages/Home';




function App() {
  return (
   
   <div>
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Entry/>}/>
      <Route path="/elogin" element={<Elogin/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/alogin" element={<ALogin/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
   </div>
    
  );
}

export default App;
