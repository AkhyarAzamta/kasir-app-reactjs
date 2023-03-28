import React from 'react';
import { useState } from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import MyModal from "./MyModal";


function FloatingButton(props) {
    const [isVisible, setIsVisible] = useState(true);
    const total = props.total;
    const qty = props.qty;
    const profile = props.profile;
    const handleScroll = (e) => {
        setIsVisible(true);
    };
    
    return (<>
        <button className={`fixed lg:bottom-8 lg:right-8 lg:p-6 bottom-4 right-4 p-4 bg-blue-500 text-white rounded-full shadow-md transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 transform scale-0'}`} onClick={() => handleScroll()}>
            <div className='flex hover:animate-bounce'>
                
                <HiOutlineShoppingCart className="text-xl lg:text-2xl" />
                <p className='border-2 p-2 rounded-full h-4 w-4 justify-center items-center text-xs font-bold flex'>
                    {props.qty}</p>
                <MyModal qty={qty} profile={profile} bayar={props.bayar} total={total} setIsVisible={setIsVisible} />
            </div>
        </button>
    </>
    );
}

export default FloatingButton;

