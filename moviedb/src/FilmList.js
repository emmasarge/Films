import React from 'react';

const FilmList = (props) => {


	return (
		<>
			{props.movies.map((movie, index) => (
             
				<div className='image-container container row d-flex justify-content-start m-3'>
					<div className='col col-sm-6 mt-4'>
                    <img className='poster img-fluid' src={movie.Poster} alt='movie'></img></div>
                    <div className='movie-info text-wrap col col-sm-6 mt-4 text-center'>
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>

                    </div>
					<div className='overlay d-flex align-items-center justify-content-center'>
						
					</div>
				</div>
			))}
		</>
	);
};

export default FilmList;