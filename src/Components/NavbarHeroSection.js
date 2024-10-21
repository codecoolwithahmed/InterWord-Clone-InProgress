import React, { useState, useEffect } from 'react';
import Button from './Button';

import { Link } from "react-router-dom"
import ToggleButton from './ToggleButton'; // Import the ToggleButton component

const NavbarHeroSection = () => {
    const [scrolling, setScrolling] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    // console.log(scrolling);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        setScrolling(scrollY > 50);
    };

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="relative h-screen overflow-hidden">
                <video
                    className="absolute inset-0 object-cover w-full h-full"
                    src="https://www.interword.hu/public/media/home_prim_video/videos/2146579b3bdab806c20ae891b2a5285689833b47.mp4"
                    autoPlay
                    loop
                    muted
                />
                <div className="absolute inset-0 bg-black opacity-30" />

                {/* Navbar with higher z-index */}
                <nav className={`fixed top-0 left-0 right-0  px-10 flex justify-between items-center transition-all duration-300 z-40 ${scrolling ? 'bg-white text-black shadow-lg' : 'bg-transparent text-white '}`}>
                    {/* Conditionally hide the logo when the sidebar is open */}
                    <div className={`text-2xl transition-opacity duration-300 ${showSidebar ? 'opacity-0' : 'opacity-100'}`}>
                        <img
                            src={scrolling ? 'https://www.interword.hu/public/ico/logo-default-hu.svg' : 'https://www.interword.hu/public/ico/logo-white-hu.svg'}
                            alt="Logo"
                        />
                    </div>
                    <div className="space-x-4 flex items-center">
                        {/* Navbar links */}
                        <a
                            href="#facebook"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#DAEE02] text-gray-900 hover:bg-white transition duration-300"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        {/* Instagram Icon */}
                        <a
                            href="#instagram"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#DAEE02] text-gray-900 hover:bg-white transition duration-300"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>

                        {/* Twitter Icon */}
                        <a
                            href="#linkedin"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#DAEE02] text-gray-900 hover:bg-white transition duration-300"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            href="#tiktok"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#DAEE02] text-gray-900 hover:bg-white transition duration-300"
                        >
                            <i className="fab fa-tiktok"></i>
                        </a>
                        <a
                            href="#pinterest"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#DAEE02] text-gray-900 hover:bg-white transition duration-300"
                        >
                            <i className="fab fa-pinterest"></i>
                        </a>
                        <button
                            className={`relative overflow-hidden border ${scrolling ? 'border-black text-black' : 'border-white text-white'} font-semibold text-md rounded-full px-6 py-4 transition-all duration-300 group focus:outline-none`}
                        >
                            <span className='absolute inset-0 bg-[#DAEE02] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0' />
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Request For Proposal</span>
                        </button>

                        {/* Replace the button with the ToggleButton */}
                        <ToggleButton toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
                    </div>
                </nav>

                {/* Hero section */}
                <div className="absolute inset-0 flex items-center justify-start px-20 py-24 text-center text-white z-10 mt-20"> {/* Added mt-20 */}
    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-6xl text-6xl mb-4 font-medium text-white">
                    WHAT WE CREATE ONLINE...
                </h1>
                <p className="mb-8 text-xl text-white leading-relaxed">
                    GIVE YOU REAL EXPERIENCES, MEETINGS, TOOLS AND BUSINESS SUCCESS
                </p>
                <div className="flex justify-center">
                    <Button 
    label="Let's get to it!" 
    color="white" 
    hovercolor='black' 
    hoverbackground='#DAEE02' 
/>
                </div>
            </div>
        </div>
    </section>
</div>



            </div>
            {/* Sidebar (behind the navbar) */}
            <div
                className={`fixed top-0 right-0 h-full w-full transition-transform duration-500 z-30 bg-gray-900 text-white ${showSidebar ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex h-full">
                    {/* Left side with the image (25% width) */}
                    <div className="w-1/4 bg-gray-700 flex items-center justify-center">
                        <img
                            src="https://www.interword.hu/public/media/home_insight/photo/xs/314bd448fc522116d37d5d54f927290c4d87eb08.jpg"
                            alt="Random"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Right side with links (75% width) */}
                    <div className="w-3/4 my-20 py-20 px-20 text-5xl">
                        <div className="grid grid-cols-2 gap-10">
                            <a href="#home" className="text-[#DAEE02] font-semibold hover:text-[#a1a1a1]">Home</a>
                            <a href="#portfolio" className="text-[#DAEE02] font-semibold hover:text-[#a1a1a1]">Portfolio</a>
                            <a href="#socialmedia" className="text-[#DAEE02] font-semibold hover:text-[#a1a1a1]">Social Media
                            </a>
                            {/* <Link to={'../Pages/SocialMedia'}>Social Media</Link> */}
                            
                            <a href="#webdevelopment" className="text-[#DAEE02] font-semibold hover:text-[#a1a1a1]">Web Development</a>
                            <a href="#proposal" className="text-[#DAEE02] font-semibold hover:text-[#a1a1a1]">Request For Proposal</a>
                            <a href="#contact" className="text-[#DAEE02] font-semibold hover:text-[#a1a1a1]">Contact</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NavbarHeroSection;
