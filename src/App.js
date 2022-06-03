import './App.css';
import  Navbar  from './components/navbar';
import Services from "./components/services"
import Portfolio from './components/portfolio';
import About from './components/about';
import Team from './components/team';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
