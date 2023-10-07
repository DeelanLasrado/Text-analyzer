import './App.css';
import Navbar from './components/Navbar';
import Textfile from './components/Textfile';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [bText, setBText] = useState('enable dark mode');
  const [textColor, setTextColor] = useState("dark");
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const togglebutton = () => {
    if (mode === 'light') {
      setMode('dark');
      setBText('disable dark mode');
      setTextColor('light');
      document.body.style.backgroundColor = "black";
      showAlert("dark mode enabled", "success");
    } else {
      setMode('light');
      setBText('enable dark mode');
      setTextColor('dark');
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <div>
          <Navbar tittle="Deen" mode={mode} bText={bText} togglebutton={togglebutton} textColor={textColor} />
          <Alert alert={alert} />
          <Routes>
            <Route path="/" element={<Textfile heading="Text to analyze" mode={mode} showAlert={showAlert} alert={alert} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
