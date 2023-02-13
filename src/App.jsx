import './App.scss';

import About from './containers/About/About';
import Work from './containers/Work/Work';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Skills from './containers/Skills/Skills';
import Testimonial from './containers/Testimonial/Testimonial';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
