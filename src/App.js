import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar.js'

import Header from './pagesdata/header/Header.js'

import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path='/' exact component={Header} />
      </Switch>
      {/* <Footer></Footer> */}
      <GlobalStyle></GlobalStyle>
    </Router>
  );
}

export default App;
