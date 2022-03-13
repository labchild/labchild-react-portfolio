import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import About from './components/About';


function App() {
  // category state for nav and rendering components
  const categories = useState(['About Me', 'Portfolio', 'Resume', 'Contact Me']);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}></Nav>
      <div>
        {currentCategory !== 'About Me' ? (
          <Main currentCategory={currentCategory} />
        ) : <About />}
        {/* about will always appear below everything else
      add portfolio (render conditional)
      add resume (render conditional) - show an "abstract", link for full resume download
      add contact form (render conditional, not modal) */}
      </div>
    </div>
  );
}

export default App;
