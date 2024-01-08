import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import NoteState from './context/notes/NoteState';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/Contact us/Contact';
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 2700);
  }
  const [theme, setTheme] = useState('light');
  const toggle_theme = () => {
    (theme === 'light') ? setTheme('dark') : setTheme('light');
    document.body.style.background = (theme === 'light') ?' rgb(15, 15, 15)':'white';
    document.body.style.color = (theme === 'light') ?'white':'black';
  }
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar showAlert={showAlert} theme={theme} toggle_theme={toggle_theme} />
          <Alert message="This is alert" alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} theme={theme} />} />
              <Route exact path="/contact" element={<Contact theme={theme} />} />
              <Route exact path="/login" element={<Login showAlert={showAlert} theme={theme} />} />
              <Route exact path="/signUp" element={<SignUp showAlert={showAlert} theme={theme} />} />
            </Routes>
          </div>

        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
