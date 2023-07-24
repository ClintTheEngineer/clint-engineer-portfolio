import NavBar from "./NavBar";
import code from '../images/code.jpg'

const LandingPage = () => {
  const devName = 'Big Daddy Clint'  

    return (
        <>
        <div id="landing-page">
        <NavBar />
        <h1>Hello, {devName} here!</h1>
        <img src={code} alt="pseudo-code"/>
        </div>
        </>
    )
}

export default LandingPage;