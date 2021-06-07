import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FilmList from './FilmList';
import FilmTop from './FilmTop';
import SearchBar from './SearchBar';
import SaveFaves from './SaveFaves';
import RemoveFaves from './RemoveFaves';
import Modal from './Modal';



const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchInput, setSearchInput]= useState('');
    const [faves, setFaves]=useState([]);
    const [modalPop, setModalPop]=useState(false);


    // Set short timed Onload Modal for instructions for user
    
    useEffect(()=> {
        setTimeout(() => {
        setModalPop(true);
        }, 2000);
    },[]);
  
    // Fetch films from API
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

  useEffect(() => {
		const movieFaves= JSON.parse(
			localStorage.getItem('react-moviedb')
		);

		if (movieFaves) {
			setFaves(movieFaves);
		}
	}, []);
    
    // Save favourite films for when page reloads
    
    const saveToLocalStorage = (items) => {
		localStorage.setItem('react-moviedb', JSON.stringify(items));
	};

    const saveFaveFilm = (movie)=> {
        const saveFaveList = [...faves, movie];
        setFaves(saveFaveList)
        saveToLocalStorage(saveFaveList)
    }

    const removeFaves = (movie)=> {
        const saveFaveList = faves.filter(
            (fave) => fave.imdbID !== movie.imdbID
        );
         setFaves(saveFaveList);
         saveToLocalStorage(saveFaveList);
    };

    

    return (
        // Display of components user will see, Modal, SaveFilms, FilmList:
<div className='container-fluid moviedb'>
        <div className="App">
            
            <Modal trigger={modalPop} setTrigger={setModalPop}>
                <h3>Welcome to FilmBase</h3>
                <p>Find your favourite films and save them.</p>
                <p>Type in a film title in the search bar <br/>
                Click on 'Save as Favourite'</p>
                <p>Voila! Your top films will be saved</p>
            </Modal>
        </div>
    
       <div className='row d-flex align-items-center mt-4 mb-4'>
           <img alt="film logo with camera" src="./filmlogo1.png" className='logo'></img>
           <FilmTop heading='FilmBase' />
          
           <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} /> 
       </div>

        <div className='row movie-row'>
                <FilmList
                    movies={movies}
                    handleFavesClick={saveFaveFilm}
                    faveComponent={SaveFaves}
                />
            </div>
            <div className='row d-flex align-items-center fave-film mt-4 mb-4'>
                <FilmTop heading='Your favourite films:'/>
                
            </div>
              <div className='row movie-row'>
                <FilmList
                    movies={faves}
                    handleFavesClick={removeFaves}
                    faveComponent={RemoveFaves}
                />
            </div>
    </div>
    );
};

export default App;