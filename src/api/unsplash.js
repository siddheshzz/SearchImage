import React from 'react'
import axios from 'axios'


const unsplash = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: ''
        },
        params: {
            query: term,
        },
    })


    return response.data.results;
};

export default unsplash;