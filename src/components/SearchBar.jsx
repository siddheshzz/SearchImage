import React, { Component } from 'react'
import { useState } from 'react';
import './SearchBar.css'


const SearchBar = ({onSubmit}) => {
    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);
    }

  return (
    <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
          <label>Enter Search Term</label>
        <input
              type="text"
              value={term}
              onChange={(e) =>
                setTerm(e.target.value.toUpperCase())
              }
            />
        </form>
    </div>
  )
}

export default SearchBar


