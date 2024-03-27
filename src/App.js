import './App.css';
import Navbar from "./components/NavBar/Navbar";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import PracticeAreas from './components/PracticeAreas/PracticeAreas';
import Testimonials from './components/Testimonials/Testimonials';
import Team from './components/Team/Team';
import FAQ from './components/FAQ/FAQ';
import NewsLetter from './components/NewsLetter/NewsLetter';


function App() {
  return (
    <main className="App" id='app'>
      <Navbar />
      <Home />
      <About />
      <PracticeAreas />
      <Testimonials />
      <Team />
      <FAQ />
      <NewsLetter />
      <Footer />
    </main>
  );
}

export default App;