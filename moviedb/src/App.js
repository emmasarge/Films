  
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FilmList from './FilmList';

const App = () => {
    const [movies, setMovies] = useState([]);

        const fetchFilms = async () => {
		const url = `https://www.omdbapi.com/?s=avengers&apikey=9431dc8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

    useEffect(() => {
		fetchFilms();
	}, []);


    return (
    <div className='container-fluid moviedb'>
        <div className='row'>
            <FilmList movies={movies}/>
        </div>
        
    </div>
    );
};

export default App;

