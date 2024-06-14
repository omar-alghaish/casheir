import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Select = ({ options, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="select_container">
      <div className="value" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : placeholder ? placeholder : 'Select an option'}
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {/* {isOpen && ( */}
        <div className={`options ${isOpen ? 'active' : ""}`}>
          {options.map((option, index) => (
            <div 
              key={index} 
              className="option" 
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      {/* )} */}
    </div>
  );
};

export default Select;
