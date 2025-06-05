import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Teachers from './components/Teachers';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Add custom CSS for animations
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Courses />
        <Benefits />
        <Testimonials />
        <Teachers />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;