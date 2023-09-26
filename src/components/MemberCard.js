import { useState, useEffect } from 'react';

function MemberCard({ member }) {
    const [showElements, setShowElements] = useState({
      photo: false,
      name: false,
      accomplishments: false
    });
  
    useEffect(() => {
      const timers = [
        setTimeout(() => setShowElements(prev => ({ ...prev, photo: true })), 500),
        setTimeout(() => setShowElements(prev => ({ ...prev, name: true })), 1000),
        setTimeout(() => setShowElements(prev => ({ ...prev, accomplishments: true })), 2500)
      ];
      return () => timers.forEach(timer => clearTimeout(timer));
    }, []);
  
    const animateWords = (text, animationClass) => (
      text.split(' ').map((word, i) => (
        <span key={i} className={`animate__animated ${animationClass} inline-block`} style={{animationDelay: `${i * 0.2}s`}}>
          {word}&nbsp;
        </span>
      ))
    );
  
    return (
      <div className="w-full md:w-3/4 lg:w-2/3 mx-auto rounded-xl shadow-2xl p-6 flex flex-col justify-center items-center transition-all ease-linear duration-700 hover:shadow-3xl animate__animated animate__fadeIn">
        {showElements.photo && <img src={member.photo} alt={member.name} className="w-60 h-60 rounded-full mb-4 transition-all ease-linear duration-700 animate__animated animate__fadeIn" />}
        {showElements.name && <h2 className="text-2xl text-black font-extrabold mb-2 transition-all ease-linear duration-700">{animateWords(member.name, 'animate__fadeIn')}</h2>}
        {showElements.accomplishments && <p className="text-lg text-black text-center mt-2 transition-all ease-linear duration-700">{animateWords(member.accomplishments, 'animate__fadeInUp')}</p>}
      </div>
    );
  }
  
  export default MemberCard;
  