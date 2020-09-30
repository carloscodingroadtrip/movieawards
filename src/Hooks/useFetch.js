import { useState, useEffect} from 'react';
import {INITIAL_SEARCH_BASE_URL, GET_FULL_MOVIE_INFO} from '../components/config';

import {arrayToObject} from '../utils'

export const useFetch = (searchTerm) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null);

    const fetchData = async (url) => {
    try {
        //Let's get the first 20 movies and total amount of movies for our searchTerm
        let moviesIds = [];
        for (let i = 1; i <= 2; i++) {
            const res = await( await  fetch(`${url}${i}`)).json()
            res.Search.forEach(element => moviesIds.push(element.imdbID));
            setError(false)
        }

        let movieDetailArr=[]
        for (let j = 0; j < moviesIds.length; j++) {
            const movieDetail = await ( await fetch(`${GET_FULL_MOVIE_INFO}${moviesIds[j]}`)).json();
            movieDetailArr.push(movieDetail);
        }
        setData(movieDetailArr);
    } catch (error) {
        setError(true)
    }
};

useEffect(() => {
    //Check to see if our last search is in SessionStorage
    if (localStorage.lastSearchState && typeof(localStorage.getItem('lastSearchState') !== 'undefined')) {
            setData(JSON.parse(localStorage.getItem('lastSearchState')));
    } else {
        fetchData(INITIAL_SEARCH_BASE_URL)
    }
}, []);

useEffect(() => {
    //if a searchTerm is sent, data has changed therefore update our SessionStorage
    localStorage.setItem('lastSearchState', JSON.stringify(data));
}, [searchTerm,data]);

return [{data,error}, fetchData];
}