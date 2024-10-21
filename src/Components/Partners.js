import React from 'react';
import Button from './Button';

function Partners() {
    const logos = [
        "https://www.interword.hu/public/media/gallery/photo/sm/a6844d96438240a662cd3bac1cb2200298a99ce4.png",
        "https://www.interword.hu/public/media/gallery/photo/sm/71333fc0d572724b86b901be2778142ad9672f99.png",
        "https://www.interword.hu/public/media/gallery/photo/sm/251fd5fae7f4d07d87663f1a128fad3686be3389.png",
        "https://www.interword.hu/public/media/gallery/photo/sm/5e7903865e87bb9f3f5d36d96887760ba318cbcf.png",
        "https://www.interword.hu/public/media/gallery/photo/sm/35009ac3c134f7789284aa791168a8a7e9162210.png",
        "https://www.interword.hu/public/media/gallery/photo/sm/24f578164a5bdfe94815414037c67461e76a49d9.png",
        "https://www.interword.hu/public/media/gallery/photo/sm/e6883346c081cf7b9b09f1f6cb5ce1b8ac5ae5cb.png",
        "https://www.interword.hu/public/media/gallery/photo/sm/50fb40b6d192c6f149e935a1f8df770d3abb57cd.png",
        "https://www.interword.hu/public/media/gallery/photo/sm/e829bdb507d50c3c735109852df0a4c64e7b0049.png",
        "https://www.interword.hu/public/media/gallery/photo/sm/c014f07b914a41714852734dffaf50683da343fa.png",
        "https://www.interword.hu/public/media/gallery/photo/sm/8db9e33a04614432e33e0770c35f65f2e51aea07.png",
        "https://www.interword.hu/public/media/gallery/photo/sm/50a4ff2a92ea5b622c3d8d94e14864aa6adcbbe4.png",
        "https://www.interword.hu/public/media/gallery/photo/sm/d5118bd06e375676f9f887dbf3e14db4be08d41f.png",
        "https://www.interword.hu/public/media/gallery/photo/sm/306f5475ea5a9b4ee496b1089b62d5467e77906d.png",
        "https://www.interword.hu/public/media/gallery/photo/sm/1a8be4e9550ad918e26fdc93b6256ac35247d7a8.png",
        "https://www.interword.hu/public/media/gallery/photo/sm/e1d4b06c106dee9fb881be1a70bbc80f56a3dec9.png",
        "https://www.interword.hu/public/media/gallery/photo/sm/51cf5eab6e36c1fa4cd373256b7b1a6519f078bc.png",
        "https://www.interword.hu/public/media/gallery/photo/sm/a749df86ce8a1f308cc5dd2de6d8605a5219b0bf.png",
    ];

    return (
        <div className="px-5 relative">
            <h2 className="text-6xl font-medium text-gray-900 mb-8">
                We work with ambitious brands, institutions and businesses
            </h2>
            <div className="absolute left--10 top-12 z-[-1] bg-[#DAEE02] h-[12px] w-[305px] px-5"></div>

        
               

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <img
                                src={logo}
                                alt={`Brand Logo ${index + 1}`}
                                className="max-w-full h-auto w-[150px]" // Adjust width as needed
                            />
                        </div>
                    ))}
                </div>
                <Button 
    label='More References' 
    background='#DAEE02' 
    color="black" 
    hovercolor='white' 
    hoverbackground='black' 
/>
            
        </div>
    );
}

export default Partners;
