import React from 'react';

const FilmList = (props) => {
    return (
        <>
            {props.movies.map((movie, index)=>
            <div className="d-flex justify-content-start">
                <img src={movie.Poster} alt="film poster"/>
            </div>
            )}
        </>
    );
};

export default FilmList;