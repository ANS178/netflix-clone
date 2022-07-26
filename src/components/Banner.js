import React, { useEffect, useState } from 'react'
import client from '../axios';
import '../styles/Banner.css'

const Banner = ({fetchUrl}) => {
    
    const [movies, setMovies] = useState([])

    useEffect(() =>{
        const fetch = async () => {
            const response = await client.get(fetchUrl);
            setMovies(response.data.results[
                Math.floor(Math.random() * response.data.results.length - 1)
            ]);
            return response;
        }
        fetch();
    
    },[fetchUrl])

    console.log(movies)


  return (
    <header className='banner'
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
            backgroundPosition: "center center",
          
        }}>
        <div className='banner_container'>
            <h1 className='banner_title'>{movies?.name || movies?.title || movies?.original_name}</h1>
            <button className='banner_btn'>Play Now</button>
            <button className='banner_btn'>My List</button>
            <h3 className='banner_description'>{movies.overview}</h3>
        </div>
        <div className='banner_fadeBottom'></div>
    </header>
  )
}

export default Banner
