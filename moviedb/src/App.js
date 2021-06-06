  
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FilmList from './FilmList';
import FilmTop from './FilmTop';
import SearchBar from './SearchBar';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchInput, setSearchInput]= useState('');

        const fetchFilms = async (searchInput) => {
		const url = `https://www.omdbapi.com/?s=${searchInput}&apikey=9431dc8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

    useEffect(() => {
		fetchFilms(searchInput);
	}, [searchInput]);


    return (
    <div className='container-fluid moviedb'>
       <div className='row d-flex align-items-center mt-4 mb-4'>
           <FilmTop heading='FilmBase' />
           <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} /> 
       </div>

        <div className='row'>
            <FilmList movies={movies}/>
        </div>
        
    </div>
    );
};

export default App;

