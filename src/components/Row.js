
import React, { useEffect, useState } from 'react'
import client from '../axios';
import '../styles/Row.css'

const Row = ({title, fetchUrl, largePic}) => {
    const [movies, setMovies] = useState([]);
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
   
    useEffect(() =>{
        const fetch = async () => {
            const response = await client.get(fetchUrl);
            setMovies(response.data.results);
            return response;
        }
        
        fetch();
    
    },[fetchUrl]) 

    // console.log(movies)
    
    return (
        <div>
            <h2 className='title'>{title}</h2>
            <div className='row_posters'>
                {movies.map((movie) => (
                    <img key={movie.id} className={`row_poster ${largePic && 'row_poster_large'}`}
                        src={`${BASE_URL}${largePic ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}/>
                ))}
            </div>
        </div>
    )
}

export default Row
