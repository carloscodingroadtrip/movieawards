import React,{useState} from 'react'
import Search from '../SearchBar'
import Grid from '../Grid'

import {INITIAL_SEARCH_BASE_URL,SEARCH_URL,SEARCH_PARAMS} from "../config";
import {useFetch} from '../../Hooks/useFetch';

export default () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [{error,data}, fetchData] = useFetch(searchTerm)

    console.log(data);

    const searchMovies= (search) => {
        setSearchTerm(search)
        const url = SEARCH_URL + search + SEARCH_PARAMS;
        fetchData(url);
    }

    const endPoint = INITIAL_SEARCH_BASE_URL;
    // Check for error while fetching
    if (error) return <div>
    <Search callback={searchMovies}/>
    No movies were found with that keyword. Search again <span role="img" aria-label="No movies were found. Search again">😟</span>.
    </div>;

    // Check if we have some data
    if (!data) return (<><div>...loading </div></>);

    return (
        <div>
            <h1>Profile |  Nominations</h1>
            <Search callback={searchMovies}/>
            { data.map(movie =>

                
                <div key={movie.imdbID}>
                <img src={movie.Poster} />
                <p>{movie.Title}</p>
                <p>{movie.Released}</p>
                </div>


            )}
            <h4>Load more...</h4>
        </div>
    )
}
