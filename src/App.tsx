import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light-theme');
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 transition-colors duration-300">
      <Navbar onToast={showToast} />
      <main>
        <Hero onToast={showToast} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact onToast={showToast} />
      </main>
      <Footer />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast font-semibold text-sm border-cyan-500 bg-slate-900 text-white shadow-2xl">
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default App;
