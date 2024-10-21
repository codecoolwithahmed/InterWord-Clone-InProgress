import React, { useState } from 'react';
import Button from './Button';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const questions = [
        {
            question: "SOCIAL MEDIA MANAGEMENT",
            answer: "Social media strategies that increase your followers through engagement, enhance your image, and spread your content like wildfire."
        },
        {
            question: "PAID CAMPAIGNS",
            answer: "Profitable, data-driven, and result-oriented advertising campaigns on platforms like Google Ads, Meta (Facebook, Instagram), and TikTok, designed to boost your website traffic and increase conversions."
        },
        {
            question: "EMAIL MARKETING",
            answer: "Loyalty-driven email strategies that fill your customers' inboxes with vibrant offers."
        },
        {
            question: "CONTENT MARKETING",
            answer: "Valuable, engaging content crafted to meet the desires and needs of your target audience."
        },
        {
            question: "WEBDESIGN AND DEVELOPMENT",
            answer: "Digital experiences built around user engagement that enhance traffic, increase engagement, and drive conversions for your brand."
        },
        {
            question: "SEO",
            answer: "Building your brand’s online reputation using proven techniques that lead to increased conversions and sales in your target market."
        },
    ];

    return (
        <div className="py-24">
            <div className="container px-5">
                Services
                <div className="relative mb-8"> {/* Added mb-8 for margin at the bottom of the heading */}
                    <h2 className="text-6xl font-medium text-gray-900">
                        You outline, We visualize
                    </h2>
                    <div className="absolute left-0 top-12 z-[-1] bg-[#DAEE02] h-[12px] w-[305px]"></div> {/* Colored bar */}
                </div>


                <div className="">
                    {questions.map((item, index) => (
                        <div key={index} className="bg-white overflow-hidden border-b border-black "> {/* Border added here */}
                            <div
                                className="py-6 cursor-pointer  flex justify-between items-center transition-all duration-1000"
                                onClick={() => toggleQuestion(index)}
                            >
                                <h3 className="font-bold text-xl text-black hover:text-[#DAEE02]">
                                    {item.question}
                                </h3>
                                <span className="text-gray-600">
                                    {openIndex === index ? '▲' : '▼'} {/* Arrow indicators */}
                                </span>
                            </div>
                            <div
                                className={`overflow-hidden transition-max-height duration-1000 ease-in-out ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}
                            >
                                <div className="py-6 text-black">
                                    <p className='text-lg'>
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <br />
                    <Button 
    label='Request For Proposal' 
    background='#DAEE02' 
    color="black" 
    hovercolor='white' 
    hoverbackground='black' 
/>
                    {/* <Button background="#DAEE02" color="f0f0f0" label="Request For Proposal" hovercolor='white' hoverbackground='f0f0f0'/> */}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
