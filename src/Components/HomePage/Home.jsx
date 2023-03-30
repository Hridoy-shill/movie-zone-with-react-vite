import React, { useEffect, useState } from 'react';
import SideCart from '../SideCart/SideCart';
import SingleCard from '../SingleCard/SingleCard';

const Home = ({handleClick, totalWatchTime}) => {
    // console.log(handleClick);

    const [moviesData, setMoviesData] = useState([])
    // console.log(moviesData);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setMoviesData(data))
    }, [])

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-3 mt-5'>
            <div className='col-span-2 grid sm:grid-cols-1 md:grid-cols-2 gap-2 rounded-md'>
                {
                    moviesData.map(movie => <SingleCard handleClick={handleClick} key={movie.movieName} movie={movie}></SingleCard>)
                }
            </div>
            
            <>
            <SideCart totalWatchTime={totalWatchTime}></SideCart>
            </>

        </div>
    );
};

export default Home;