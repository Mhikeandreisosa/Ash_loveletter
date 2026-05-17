import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import './Envelope.css';

const Envelope = ({ isOpened, onOpen }) => {
  return (
    <div className={`envelope-wrapper ${isOpened ? 'opened' : ''}`} onClick={onOpen}>
      <motion.div 
        className="envelope"
        initial={{ y: 0 }}
        animate={{ y: isOpened ? 200 : 0, opacity: isOpened ? 0 : 1 }}
        transition={{ duration: 0.8, delay: isOpened ? 1.5 : 0 }}
      >
        <div className="front">
          <div className="flap" />
          <div className="pocket" />
          <div className="heart-seal">
            <Heart fill="var(--pink-500)" color="var(--pink-500)" size={32} />
          </div>
        </div>
        <div className="back" />
        <div className="letter-preview">
          <p>For Ashley...</p>
        </div>
      </motion.div>
      {!isOpened && (
        <motion.p 
          className="click-me"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          Click to open 💌
        </motion.p>
      )}
    </div>
  );
};

export default Envelope;
