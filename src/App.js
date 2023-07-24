import './App.css';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import FloatingButton from './components/FloatingButton';
import AnimatedTextSlide from './components/AnimatedTextSlide';

function App() {
  return (
    <div className="App">
     <LandingPage />
     <AnimatedTextSlide text="Purple!" />
     <Projects />
     <TechStack />
     <Contact/>
     <FloatingButton />
    </div>
  );
}

export default App;
