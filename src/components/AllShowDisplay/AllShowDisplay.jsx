import React, { useEffect, useState } from 'react';
import CartCalculate from '../CartCalculate/CartCalculate';
import DisplayMovies from '../DisplayMovies/DisplayMovies';

const AllShowDisplay = () => {
    const [movies,setMovies] = useState([]);
    const [watchTime,setWatchTime] = useState(0);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setMovies(data));
    },[])

    const handelAddToCart = (time)=>{
        const getWatchTime = JSON.parse(localStorage.getItem('watch-time'));
        if(getWatchTime){
            const totalTime = getWatchTime + time;
            localStorage.setItem('watch-time', JSON.stringify(totalTime)); 
            setWatchTime(totalTime)
        }
        else{
            localStorage.setItem('watch-time', JSON.stringify(time));
            setWatchTime(time)
        }
    };

    return (
        <div className='bg-amber-500'>
            <div className='flex flex-col lg:flex-row lg:px-12'>
                <div className='sm:w-full lg:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5'>
                    {
                        movies.map(movie=><DisplayMovies 
                            movie={movie}
                            handelAddToCart={handelAddToCart}
                        ></DisplayMovies>)
                    }
                </div>
                <div className='sm:w-full lg:w-1/5 bg-sky-400 lg:ml-3 my-5 rounded-lg'>
                    <CartCalculate watchTime={watchTime}></CartCalculate>
                </div>
            </div>
        </div>
    );
};

export default AllShowDisplay;