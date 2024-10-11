import React, { ReactNode } from 'react';

interface ButtonMoneyProps {
    icon: ReactNode; // Permite cualquier tipo de elemento React
    text: string;
    onClick: () => void; // Función que no recibe argumentos y no devuelve nada    
    className?: string; // Clase opcional
}

const ButtonMoney: React.FC<ButtonMoneyProps> = ({ icon, text, onClick, className = '' }) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-start ${className} rounded-xl transition-all duration-300 `}    
        >
            {icon}
            <span className="ml-2">{text}</span>
        </button>
    );
};

export default ButtonMoney;
