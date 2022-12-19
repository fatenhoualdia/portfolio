import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from './components/tesimonials/Testimonials';
import Footer from './components/footer/Footer';
import Education from './components/Education/Education';
import Internship from './components/Internship/Internship';



function App() {
  return (
  <>
<Header/> 
<Nav/>
<About/>
<Education/> 
<Experience/> 
<Internship/>  
<Portfolio/>
<Testimonials/> 
<Footer/> 

  </> 
  );
}

export default App;
