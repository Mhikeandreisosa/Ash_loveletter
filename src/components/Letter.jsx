import React from 'react';
import { motion } from 'framer-motion';
import { Music, Heart } from 'lucide-react';
import './Letter.css';

const Letter = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <motion.div 
      className="letter-container"
      initial={{ opacity: 0, scale: 0.8, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
    >
      <div className="letter-paper">
        <div className="letter-header">
          <h2>to: Ashley Nicole Torres Veloria</h2>
        </div>
        
        <div className="letter-body">
          <p>When I listen to "Mrs Magic" by Strawberry Guy, it feels like you.</p>

          <p>Being around you is like that — I get captivated by your charm and the way you carry yourself. The moment I met you, your presence felt almost magical. You make my heart race and my thoughts go all over the place in the best way.</p>

          <p>You’re the person who brings color and light into my life. You take the most ordinary moments and make them feel extraordinary, just by being there. I can’t help but be fascinated by you. There’s something mysterious and captivating about you that I can’t look away from.</p>

          <p>With you, everything feels dreamy and a little whimsical, like I’m under a spell. You make me believe in magic again, and in how powerful it is to actually connect with someone.</p>
        </div>

        <div className="letter-footer">
          <h3>fro: sosa</h3>
        </div>

        <div className="spotify-link-container">
          <a 
            href="https://open.spotify.com/playlist/5cXhCCBLZksEysJKYzbjkL?si=K6URfnCpT-OZSBAO5AppDQ&pi=tBYXQaFzRKmcC" 
            target="_blank" 
            rel="noopener noreferrer"
            className="spotify-btn"
          >
            <Music size={20} />
            <span>Listen to our playlist</span>
            <Heart size={20} fill="white" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Letter;
