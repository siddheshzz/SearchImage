import React, { Component } from 'react'
import SearchBar from './SearchBar'
import unsplash from '../api/unsplash'
import ImageList   from './ImageList'
import { useState } from 'react'



const App = () => {
  const[images,setImages] = useState([])
  const handleSubmit =async (term) =>{
    setImages(await unsplash(term))


  }



  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images}/>
      
    </div>
  )
}

export default App


