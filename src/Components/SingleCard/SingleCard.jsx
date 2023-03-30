import { handler } from 'daisyui';
import React from 'react';

const SingleCard = (props) => {
    // console.log(props);  
    const {category, description, imdbRating, movieName, poster, watchTime, } = props.movie;
    return (
        <div>
             <div className=''>
                <div className='border-2 border-blue-400 h-fit p-5 text-center rounded-xl'>
                    <img className='w-50 h-60 mx-auto' src={poster} />
                    <h2 className='font-bold text-2xl my-3'>{movieName}</h2>
                    <p className='font-bold text-xl mb-3'>{description}</p>
                    <div className='flex justify-evenly'>
                        <p className='font-bold  mt-3 border-2 px-2 py-1 rounded-lg border-sky-500'>{watchTime} Min</p>
                        <p className='font-bold  mt-3 border-2 px-2 py-1 rounded-lg border-sky-500'>{category}</p>
                    </div>
                    <p className='font-bold text-xl mt-3'>IDM: ({imdbRating})</p>
                    <button onClick={()=>props.handleClick(watchTime)} className="btn btn-info py-0 mt-4">Watch Now..</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;