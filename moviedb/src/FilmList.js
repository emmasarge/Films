import React from 'react';

const FilmList = (props) => {
    return (
        <>
            {props.movies.map((movie, index)=>
            <div className="d-flex justify-content-start m-3">
                <img src={movie.Poster} alt="film poster"></img>
            </div>
            )}
        </>
    );
};

export default FilmList;