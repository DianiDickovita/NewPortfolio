import './App.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Home from './components/Home';
import MenuBar from './components/MenuBar';
import { BrowserRouter as Router} from 'react-router-dom';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
          <MenuBar />
          <Home />
          <AboutMe />
          <Experience />
          <Project />
          <Contact />
          {/* Add other sections/components */}
        
      </div>
    </Router>
  );
}

export default App;
