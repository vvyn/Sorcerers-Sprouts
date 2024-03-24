//import logo from './logo.svg';
import './App.css';
//import Navbar from "./components/NavBar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Login} from './pages/Login.js';
import { Survey1 } from './pages/Survey/Survey1.js';
import { Survey2 } from './pages/Survey/Survey2.js';
import { Survey3 } from './pages/Survey/Survey3.js';
import { Survey4 } from './pages/Survey/Survey4.js';
import { Survey5 } from './pages/Survey/Survey5.js';
import { Survey6 } from './pages/Survey/Survey6.js';
import { Survey7 } from './pages/Survey/Survey7.js';
import { Survey8 } from './pages/Survey/Survey8.js';
import { Survey9 } from './pages/Survey/Survey9.js';
import { Survey10 } from './pages/Survey/Survey10.js';
import { Hat } from './pages/Hat.js';

function App() {
  return (
    <>
    {
      <Router>
        <Routes>
            <Route exact path = "/" element = {<Login />}>/</Route>
            <Route exact path = "/Survey1" element = {<Survey1 />}>/</Route>
            <Route exact path = "/Survey2" element = {<Survey2 />}>/</Route>
            <Route exact path = "/Survey3" element = {<Survey3 />}>/</Route>
            <Route exact path = "/Survey4" element = {<Survey4 />}>/</Route>
            <Route exact path = "/Survey5" element = {<Survey5 />}>/</Route>
            <Route exact path = "/Survey6" element = {<Survey6 />}>/</Route>
            <Route exact path = "/Survey7" element = {<Survey7 />}>/</Route>
            <Route exact path = "/Survey8" element = {<Survey8 />}>/</Route>
            <Route exact path = "/Survey9" element = {<Survey9 />}>/</Route>
            <Route exact path = "/Survey10" element = {<Survey10 />}>/</Route>
            <Route exact path = "/Hat" element = {<Hat />}>/</Route>
        </Routes>
      </Router>
    }
    </>
  );
}

export default App;
