import React, { useState } from 'react';

function OurTeam() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const teamMembers = [
        {
            name: "Ivan Bodogan",
            profession: "CEO",
            photo: "https://www.interword.hu/public/media/worker/photo/sm/mg4367-1721062632.jpg",
        },
        {
            name: "Zsuzsanna Bodogán-Takács",
            profession: "online marketing specialist",
            photo: "https://www.interword.hu/public/media/worker/photo/sm/takacs-zsu-1720818493.jpg",
        },
        {
            name: "Laszlo Horvath",
            profession: "senior web developer",
            photo: "https://www.interword.hu/public/media/worker/photo/sm/laci-1723033854.jpg",
        },
        {
            name: "Gergo Vida",
            profession: "senior web developer",
            photo: "https://www.interword.hu/public/media/worker/photo/sm/mg4223-1721062478.jpg",
        },
        {
            name: "Mark Tima",
            profession: "digital communications manager",
            photo: "https://www.interword.hu/public/media/worker/photo/sm/mark-1723034504.jpg",
        },
        {
            name: "Judit Pinter",
            profession: "junior marketing coordinator",
            photo: "https://www.interword.hu/public/media/worker/photo/sm/judit-1723034778.jpg",
        },
        
        
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + teamMembers.length) % teamMembers.length
        );
    };

    return (
        <div className="px-5 relative">
            Get to know interword

            <h2 className="text-6xl font-medium text-gray-900 mb-8">
                Our team
            </h2>
            <div className="absolute left--10 top-[70px] z-[-1] bg-[#DAEE02] h-[12px] w-[305px] px-5"></div> {/* Colored bar */}
            
            <div className="relative overflow-hidden mb-[100px]">
                <div className="container mx-auto flex items-center justify-center">
                    <button onClick={prevSlide} className="absolute left-0 z-10 p-2 text-white bg-[#DAEE02] rounded-full ">
                        &#10094; {/* Left Arrow */}
                    </button>

                    <div className="flex transition-transform duration-500 ease-in-out" 
                        style={{ transform: `translateX(-${currentIndex * (100 / teamMembers.length)}%)` }}>
                        {teamMembers.map((member, index) => (
                            <div key={index} className="flex-shrink-0 w-full md:w-1/3 p-4"> {/* Adjust width as needed */}
                                <div className="box bg-white shadow-md rounded-lg overflow-hidden">
                                    <div className="img-box">
                                        <img src={member.photo} alt={member.name} className="w-full h-58 object-cover" /> {/* Full width and fixed height */}
                                    </div>
                                    <div className="txt-box p-4">
                                        <div className="name font-bold text-3xl">{member.name}</div>
                                        <div className="position  font-semibold text-sm">{member.profession}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={nextSlide} className="absolute right-0 z-10 p-2 text-white bg-[#DAEE02] rounded-full ">
                        &#10095; {/* Right Arrow */}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
