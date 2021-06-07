import React from 'react';
// Headers for FilmBase and Favourite films
const FilmTop = (props) => {
    return (
        <div className='col header'>
            <h1>{props.heading}</h1>

        </div>
    )
};

export default FilmTop;