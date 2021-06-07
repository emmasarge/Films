import React from 'react';
// Search input to retrieve films from API
const SearchBar = (props) => {
    return(
        <div className='col col-sm-6'>
            <input className='form-control searchbar' value={props.value}
            onChange={(event)=> props.setSearchInput(event.target.value)} placeholder='Search for a film...'></input>

        </div>
    )
};

export default SearchBar;