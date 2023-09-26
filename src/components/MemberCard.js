import { useState, useEffect } from 'react';

function MemberCard({ member, showAnimatedText }) {
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
            <span key={i} className={`animate__animated ${animationClass} inline-block`} style={{ animationDelay: `${i * 0.2}s` }}>
                {word}&nbsp;
            </span>
        ))
    );

    return (
        <div className="mx-auto rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 flex flex-col justify-center items-center transition-all ease-linear duration-700 hover:shadow-3xl animate__animated animate__fadeIn"
            style={{ width: '400px', overflowWrap: 'break-word' }}>  {/* Increased fixed width and padding */}

            {showAnimatedText && (
                <div className="mb-2 sm:mb-4 md:mb-4 text-2xl sm:text-3xl md:text-4xl text-center font-bold">
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
            {showElements.photo && <img src={member.photo} alt={member.name} className="w-36 sm:w-32 md:w-60 h-36 sm:h-32 md:h-60 rounded-full mb-2 sm:mb-4 transition-all ease-linear duration-700 animate__animated animate__fadeIn" />}
            {showElements.name && <h2 className="text-sm sm:text-lg md:text-2xl text-black font-extrabold mb-1 sm:mb-2 transition-all ease-linear duration-700">{animateWords(member.name, 'animate__fadeIn')}</h2>}
            {showElements.accomplishments && <p className="text-xs sm:text-sm md:text-lg text-black text-center mt-1 sm:mt-2 transition-all ease-linear duration-700">{animateWords(member.accomplishments, 'animate__fadeInUp')}</p>}
        </div>
    );
}

export default MemberCard;
