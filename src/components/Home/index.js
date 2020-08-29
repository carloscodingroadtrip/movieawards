import React,{useState} from 'react'
import Search from '../SearchBar'

import {INITIAL_SEARCH_BASE_URL} from "../config";
import {useFetch} from '../../Hooks/useFetch';

export default () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [{error,data}, fetchData] = useFetch(searchTerm)

    console.log(data);

    const searchMovies= (search) => {
        fetchData(endPoint)
    }

    const endPoint = INITIAL_SEARCH_BASE_URL;
    // Check for error while fetching
    if (error) return <div>Failed to fetch the URL, please check credentials. <span role="img" aria-label="Failed to fetch the URL,sad face">😟</span>.</div>;


    return (
        <div>
            <h1>Profile |  Nominations</h1>
            <Search callback={searchMovies}/>
            <h3>GRID GRID GRID</h3>
            <h4>Load more...</h4>
        </div>
)
}
