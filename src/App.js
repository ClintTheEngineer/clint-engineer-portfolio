import './App.css';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import FloatingButton from './components/FloatingButton';


function App() {
  
  return (
    <div className="App">
     <LandingPage />
     <Projects />
     <TechStack />
     <Contact/>
     <FloatingButton />
    </div>
  );
}

export default App;
