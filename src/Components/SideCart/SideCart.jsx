import React, { useEffect, useState } from 'react';

const SideCart = ({ totalWatchTime }) => {
    
    const [updatedTime, setUpdatedTime] = useState(totalWatchTime)
    const [breakTime, setBreakTime] = useState(0)

    useEffect(()=>{
        const getPrevieusTime = localStorage.getItem('watch-time')
        setUpdatedTime(getPrevieusTime)

        const getBreakTime = localStorage.getItem('Break-time')
        if(getBreakTime === null){
            setBreakTime(0)
        }
        else{
            setBreakTime(getBreakTime)
        }

    },[totalWatchTime])

    const handleBreakTime = (bt) =>{
       localStorage.setItem('Break-time', bt)
       setBreakTime(bt)
    }

    return (
        <div>
            <div className="details-section border-2 border-blue-400 rounded-lg h-fit p-5">
                <h1 className='text-center text-xl font-bold border-b-2'>Strimming Details</h1>
                <div className='text-center'>
                    <h1 className='font-samibold mt-10'>Total watch time</h1>
                    <input className='bg-slate-200 mt-3 p-1 font-semibold rounded border border-sky-500 text-center' type="number" value={updatedTime}/>
                </div>
                <h1 className='text-center font-semibold text-xl mt-5'>Add Break time</h1>
                <div className='text-center mt-2'>
                    <button onClick={()=>handleBreakTime(15)} className='btn ml-2 py-2 text-xl font-semibold bg-cyan-500 text-white'>15</button>
                    <button onClick={()=>handleBreakTime(20)} className='btn ml-2 py-2 text-xl font-semibold bg-amber-400 text-white'>20</button>
                    <button onClick={()=>handleBreakTime(25)} className='btn ml-2 py-2 text-xl font-semibold bg-red-500 text-white'>25</button>
                    <input className='bg-slate-200 mt-3 p-1 font-semibold rounded border border-sky-500 text-center' type="number" value={breakTime}/>
                </div>
                <div className='text-center'>
                    <button className='btn btn-info bg-sky-500 text-xl text-white font-semibold w-4/5 mt-5'>Complet</button>
                </div>
            </div>
        </div>
    );
};

export default SideCart;