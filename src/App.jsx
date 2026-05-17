import React, { useState } from 'react';
import Envelope from './components/Envelope';
import Letter from './components/Letter';
import './App.css';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleOpen = () => {
    if (!isOpened) {
      setIsOpened(true);
      // Wait for the envelope animation to finish before showing the full letter
      setTimeout(() => {
        setShowLetter(true);
      }, 2500); // Envelope opens at 0.8s + wait for letter preview to slide out at 1.3s
    }
  };

  return (
    <div className="app-container">
      {!showLetter && (
        <Envelope isOpened={isOpened} onOpen={handleOpen} />
      )}
      <Letter isVisible={showLetter} />
    </div>
  );
}

export default App;
