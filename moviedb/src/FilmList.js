import React from 'react';

const FilmList = (props) => {
const FaveComponent = props.faveComponent;
// Displays Film information from the API
	return (
		<>
			{props.movies.map((movie, index) => (
          
				<div className='image-container container-fluid mb-4 d-flex row justify-content-center m-3'>
					<div className='col col-sm-6 mt-4'>
                    <img className='poster img-center' alt='movie poster'src={movie.Poster}></img></div>
                    <div className='movie-info text-wrap col col-sm-6 mt-4 text-center'>
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>

                  
                    <div
						onClick={() => props.handleFavesClick(movie)}className='overlay d-flex align-items-center justify-content-center'
					>
                        <div className="fave-component" >
						<FaveComponent />
					    </div>
                    </div>  </div>
				</div>
			))}
		</>
	);
};

export default FilmList;