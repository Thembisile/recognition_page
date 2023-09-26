function RevealButton({ onClick }) {
    return (
        <button
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white text-lg font-bold py-2 px-6 rounded-full hover:from-purple-500 hover:via-pink-400 hover:to-red-400"
            onClick={onClick}
        >
            Reveal Member of the Week
        </button>
    );
}

export default RevealButton;
