import React, { useEffect, useState } from 'react';

const CartCalculate = ({watchTime}) => {
    const [time,setTime] = useState(watchTime);
    const [breakTimee,setBreakTimee] = useState(0);

    useEffect(()=>{
        const getWatchTime = JSON.parse(localStorage.getItem('watch-time'));
        setTime(getWatchTime);
        const getBreakTime = JSON.parse(localStorage.getItem('break-time'));
        setBreakTimee(getBreakTime);
        const getBreakTime20 = JSON.parse(localStorage.getItem('break-time20'));
        setBreakTimee(getBreakTime20);
        const getBreakTime25 = JSON.parse(localStorage.getItem('break-time25'));
        setBreakTimee(getBreakTime25);
    },[watchTime])

    const handleBreakTime = (breakTime)=>{
        localStorage.setItem('break-time', breakTime);
        setBreakTimee(breakTime)
    }

   const handleBreakTime20 = (breakTime20)=>{
        localStorage.setItem('break-time20', breakTime20);
        setBreakTimee(breakTime20)
    }

   const handleBreakTime25 = (breakTime25)=>{
        localStorage.setItem('break-time25', breakTime25);
        setBreakTimee(breakTime25)
    }

    return (
            <div className='px-5 mt-3'>
                <h1 className='font-bold text-2xl'>Total Watch Time:</h1>
                <input type="text" value={time} placeholder="Watch Time" className="input w-full max-w-xs mt-3" />  
                <div>
                    <h1 className='font-bold text-2xl mt-12'>Add Break Time:</h1>
                    <div className='mt-3'>
                        <button onClick={()=>handleBreakTime(15)} className="btn btn-active btn-primary px-7">15</button>
                        <button onClick={()=>handleBreakTime20(20)} className="btn btn-active btn-secondary mx-2 px-7">20</button>
                        <button onClick={()=>handleBreakTime25(25)} className="btn btn-active btn-error px-7">25</button>
                        <input type="text" value={breakTimee} placeholder="Watch Time" className="input w-full max-w-xs mt-3" />  
                    </div>
                </div>  
                <div className='mt-12'>
                    <button className="btn btn-warning w-full mx-auto mb-3">Complete</button>
                </div>    
            </div>
    );
};

export default CartCalculate;