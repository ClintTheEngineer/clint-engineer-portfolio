import NavBar from "./NavBar";
import AnimatedTextSlide from "./AnimatedTextSlide";

const LandingPage = () => {
  const devName = 'Clint The Engineer';  
  const introText = `Software engineering with a holisitic mindset`;
  const frontEnd = '💻Front-end: UI, Components, Version Control Systems, Package Managers';
  const backEnd = '💾Back-end: APIs, Auth, Testing, Databases';

    return (
        <>
        <div id="landing-page">
        <NavBar />
        <h1 className="landing-name"><span>Hello, {devName} here!</span></h1>
        <AnimatedTextSlide text={introText} />
        <h3 className="landing-text"><span>{frontEnd}</span></h3>
        <h3 className="landing-text"><span>{backEnd}</span></h3>
        </div>
        </>
    )
}

export default LandingPage;