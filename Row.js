import React, { useState, useEffect } from 'react';
import axios from './axios';

function Row({title, fetchUrl}){
    const [movies, setMovies] = useState ([]);

    //carga la información cuando carga el row
    useEffect(() => {

        async function fetchData()
        {
            //le decimos que espere para que no de error
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);//para ver la estructura de los datos recibidos
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.table(movies);

    return (
        <div className = "row">
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map(movie => (
                    <img src={movie.poster_path} alt ={movie.name}/>
                   ) )}
            </div>
            {}
        </div>
    )

}

export default Row