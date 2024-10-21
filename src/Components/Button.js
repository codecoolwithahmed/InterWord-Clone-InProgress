function Button(prompt) {
    return (
        <div>
            <button 
                style={{ backgroundColor: prompt.background, color: prompt.color }} 
                className="relative overflow-hidden border border-white font-semibold text-2xl rounded-full px-7 py-3 transition-all duration-300 group focus:outline-none"
            >
                <span 
                    style={{ backgroundColor: prompt.hoverbackground }} 
                    className="absolute inset-0 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"
                />
                <span 
                    className="relative z-10 transition-colors duration-300 group-hover:text-white" // Changes color to white on hover
                >
                    {prompt.label}
                </span>
            </button>
        </div>
    );
}

export default Button;
