import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar.js';

import Header from './pagesdata/header/Header.js';
import AboutMeInfo from './pagesdata/aboutme/AboutMe.js';

import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path='/'>
          <Header />
          <AboutMeInfo />
        </Route>
      </Switch>
      {/* <Footer></Footer> */}
      <GlobalStyle></GlobalStyle>
    </Router>
  );
}

export default App;
