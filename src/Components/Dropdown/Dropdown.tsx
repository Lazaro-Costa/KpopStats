import React, { useState, useEffect, useRef } from 'react';
import { IGetCompanys } from '../../Interfaces/Interfaces.api';

type EntityGet = IGetCompanys;

interface DropdownSelectProps {
  options: EntityGet[];
  onSelect: (id: number) => void;
  handleLoad: () => void;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({ options, onSelect, handleLoad }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<EntityGet | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: EntityGet) => {
    setSelectedOption(option);
    onSelect(option.id);
    setIsOpen(false);
    toggleDropdown();
  };

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeDropdown = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeDropdown);
    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);

  return (
    <div className="relative inline-block text-slate-200">
      <div
        ref={dropdownRef}
        className="bg-zinc-800 rounded-lg border border-blue-500 max-w-xs w-64 cursor-pointer select-none"
        onClick={toggleDropdown}
      >
        <div className="py-2 px-4">{selectedOption ? selectedOption.name : 'Escolha uma opção'}</div>
        {isOpen && (
          <div className="absolute z-10 mt-2 w-full max-h-48 overflow-y-auto bg-zinc-900 rounded-lg border border-blue-500">
            {options.map((option) => (
              <div
                key={option.id}
                className="px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white"
                onClick={() => handleOptionClick(option)}
              >
                {option.name}
              </div>
            ))}
            <div className='px-4 py-2 bg-zinc-700 w-full max-h-48 border-t border-blue-500 flex items-center justify-center'>
              <button onClick={(e) => {e.preventDefault(); handleLoad()}}>Load More</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownSelect;
