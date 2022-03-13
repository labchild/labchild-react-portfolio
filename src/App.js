import { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import ProjectList from './components/ProjectList';
import Resume from './components/Resume';
import ContactForm from './components/ContactForm';


function App() {
  // category state for nav and rendering components
  const [currentSection, setCurrentSection] = useState('About');
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
        {/* about will always appear below everything else
      add portfolio (render conditional)
      add resume (render conditional) - show an "abstract", link for full resume download
      add contact form (render conditional, not modal) */}
        {renderSection()}
      </main>
      {/* don't forget a footer*/}
    </div>
  );
}

export default App;