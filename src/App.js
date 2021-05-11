import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.js'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
    </Router>
  );
}

export default App;
