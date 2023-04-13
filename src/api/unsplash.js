import React from 'react'
import axios from 'axios'


const unsplash = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 5N5A32_aQjsHG9Vikopf6CZla8Z-F58C2w_rnFP0PFE'
        },
        params: {
            query: term,
        },
    })


    return response.data.results;
};

export default unsplash;