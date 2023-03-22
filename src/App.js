import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import { Home } from './Components/Screens/Home';
import { Login } from './Components/Screens/Login';
import { Register } from './Components/Screens/Register';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  
    </div>
    </Router>
  );
}

export default App;
