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
    if (error) return <div>Failed to fetch the URL, please check credentials. <span role="img" aria-label="Failed to fetch the URL,sad face">😟</span>.</div>;


    return (
        <div>
            <h1>Profile |  Nominations</h1>
            <Search callback={searchMovies}/>
            <Grid>
            {
                data.forEach(movie =>
                        (
                            <ul>
                            {movie.Title}
                            </ul>
                        )
                )
            }
            </Grid>
            {}
            <h4>Load more...</h4>
        </div>
    )
}

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}