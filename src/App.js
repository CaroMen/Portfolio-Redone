import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar.js';

import Header from './pagesdata/header/Header.js';
import AboutMeInfo from './pagesdata/aboutme/AboutMe.js';
import Projects from './pagesdata/projectsdata/ProjectsData.js';
import WanderHunt from './pagesdata/wanderhunt/ProjectData.js';

import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/'>
          <Header />
          <AboutMeInfo />
          <Projects />
        </Route>
        <Route path="/wanderhunt">
          <WanderHunt />
        </Route>
      </Switch>
      {/* <Footer></Footer> */}
      <GlobalStyle></GlobalStyle>
    </Router>
  );
}

export default App;
