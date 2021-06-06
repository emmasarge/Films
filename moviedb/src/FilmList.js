import React from 'react';

const FilmList = (props) => {
const FaveComponent = props.faveComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
             
				<div className='image-container container-fluid d-flex row justify-content-center m-3'>
					<div className='col col-sm-6 mt-4'>
                    <img className='poster img-center' src={movie.Poster} alt='movie'></img></div>
                    <div className='movie-info text-wrap col col-sm-6 mt-4 text-center'>
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>

                    </div>
                    <div
						onClick={() => props.handleFavesClick(movie)}className='overlay d-flex align-items-center justify-content-center'
					>
						<FaveComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default FilmList;