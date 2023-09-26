import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import RevealButton from './components/RevealButton';
import MemberCard from './components/MemberCard';
import './tailwind.css';
import './styles.css';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [member, setMember] = useState(null);
  const [showMember, setShowMember] = useState(false);
  const [showAnimatedText, setShowAnimatedText] = useState(false);

  useEffect(() => {
    setMember({
      name: 'Shaun Damon',
      photo: 'IMG_0230.JPG',
      accomplishments: 'Completed 5 tasks ahead of schedule.'
    });
  }, []);

  const handleReveal = () => {
    const drumrollAudio = new Audio('/drumroll.mp3');
    drumrollAudio.play();

    const drumrollDuration = 4000;

    setTimeout(() => {
      const applauseAudio = new Audio('/applause.mp3');
      applauseAudio.play();
      setShowConfetti(true);
      setShowMember(true);
      setShowAnimatedText(true);
    }, drumrollDuration);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-400 via-blue-500 to-teal-500">
      {!showMember && <RevealButton onClick={handleReveal} />}
      {showConfetti && <Confetti numberOfPieces={500} />}
      {showMember && (
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 animate__fadeIn">
          {showAnimatedText && (
            <div className="mb-4 text-4xl text-center font-bold">
              {Array.from("CONGRATULATIONS").map((char, index) => (
                <span
                  className="inline-block"
                  style={{
                    animation: `fall 1.5s ease-out ${index * 0.1}s forwards`,
                    opacity: 0
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
          )}
          <div className="bg-gradient-to-r from-purple-300 via-blue-300 to-teal-300 p-8 rounded-lg shadow-xl animate__zoomIn">
            <MemberCard member={member} />
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
