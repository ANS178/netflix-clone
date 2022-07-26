
import React, { useEffect, useState } from 'react'
import client from '../axios';
import '../styles/Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const Row = ({title, fetchUrl, largePic}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setUrl] = useState('')
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
   
    useEffect(() =>{
        const fetch = async () => {
            const response = await client.get(fetchUrl);
            setMovies(response.data.results);
            return response;
        }
        
        fetch();
    
    },[fetchUrl])
    
    // From 'react-youtube' documentation
    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    
    const handleClink = (movie) => {
        if (trailerUrl){
            setUrl('')// closes the popup if its already open
        }else {
            movieTrailer(movie?.name || '')
            .then((url) =>{
                const urlParams = new URLSearchParams(new URL(url).search); // to get everything after the ? in the URL
                setUrl(urlParams.get('v'));
            })
            .catch((error) => console.log(error));
        }
    }
    // console.log(movies)
    
    return (
        <div>
            <h2 className='title'>{title}</h2>
            <div className='row_posters'>
                {movies.map((movie) => (
                    <img key={movie.id} onClick={() => handleClink(movie)} className={`row_poster ${largePic && 'row_poster_large'}`}
                        src={`${BASE_URL}${largePic ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}/>
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
