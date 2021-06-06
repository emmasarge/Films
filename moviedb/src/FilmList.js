import React from 'react';

const FilmList = (props) => {
    return (
        <>
            {props.movies.map((movie, index)=> (
            <div className="image-container d-flex justify-content-start m-3">
                <table>
                  
                <tr><h1 className='movietitle'>{movie.Title}</h1></tr>
                <tr><img className='movieposter' alt="film poster" src={movie.Poster} ></img></tr> 
                <div className='magnify d-flex align-items-center justify-content-center'></div>
        
           </table>
            </div>
            ))}
        </>
    );
};

export default FilmList;