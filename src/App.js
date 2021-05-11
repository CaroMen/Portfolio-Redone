import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <GlobalStyle></GlobalStyle>
    </Router>
  );
}

export default App;
