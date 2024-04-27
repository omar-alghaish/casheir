import React, { useEffect } from 'react';
import Receipt from '../pos-sale/components/Receipt';
import { useNavigate } from 'react-router-dom';

const Print = () => {
    const navigate = useNavigate();

    const handlePrint = () => {
        window.print(); 

        const intervalId = setInterval(() => {
            if (!document.hasFocus()) {
                clearInterval(intervalId); 
                navigate(-1); 
            }
        }, 100);

        return () => clearInterval(intervalId);
    };

    return (
        <div className='print_container'>
            <Receipt />
            <button onClick={handlePrint}>Print</button>
        </div>
    );
};

export default Print;
