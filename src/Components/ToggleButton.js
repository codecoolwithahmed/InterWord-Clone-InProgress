import React from 'react';

const ToggleButton = ({ toggleSidebar, showSidebar }) => {
  return (
    <a
      href="#menu"
      onClick={toggleSidebar}
      className="block w-7 h-8 mx-auto my-8 py-5 relative cursor-pointer"
    >
      <span
        className={`block w-full h-1 bg-[#DAEE02] transition-all duration-300 rounded ${showSidebar ? 'opacity-0' : 'opacity-100'}`}
      />
      <span
        className={`absolute left-0 top-[31px] block w-full h-1 bg-[#DAEE02] transition-all duration-300 rounded ${showSidebar ?'opacity-0' : 'opacity-100'}`}
      />
      <span
        className={`absolute left-0 top-[9px] block w-full h-1 bg-[#DAEE02] transition-all duration-300 rounded ${showSidebar ? 'transform rotate-45 translate-x-1 translate-y-1' : ''}`}
      />
      <span
        className={`absolute left-0 top-[9px] block w-full h-1 bg-[#DAEE02] transition-all duration-300 rounded ${showSidebar ? 'transform -rotate-45 translate-x-1 translate-y-1' : ''}`}
      />
      
    </a>
  );
};

export default ToggleButton;
