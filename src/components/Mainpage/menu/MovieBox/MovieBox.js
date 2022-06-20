import React from 'react';
import '../../css/mainpage.css';
import MovieBoxCards from './MovieBoxCards';


function MovieBox() {
    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <MovieBoxCards />
        </>
    );
}

export default MovieBox