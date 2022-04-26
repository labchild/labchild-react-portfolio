import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import ProjectList from './components/ProjectList';
import Resume from './components/Resume';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Home from './components/Home';


function App() {
  // category state for nav and rendering components
  const [currentSection, setCurrentSection] = useState('Home');
  const renderSection = () => {
    switch (currentSection) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <ProjectList />;
      case 'Contact':
        return <ContactForm />;
      case 'Resume':
        return <Resume />;
      case 'Home':
        return <Home />;
      default:
        return <Home />;
    }
  };

  const handleSectionSelect = sectionTitle => setCurrentSection(sectionTitle);

  return (
    <div>
      <Nav
        currentSection={currentSection}
        handleSectionSelect={handleSectionSelect}
      >
      </Nav>
      <main id="main">
        {/* about will always appear below everything else?
      add portfolio (render conditional)
      add resume (render conditional) - show an "abstract", link for full resume download
      add contact form (render conditional, not modal) */}
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;