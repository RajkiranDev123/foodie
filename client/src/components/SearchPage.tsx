import React, { useState } from 'react'
import { useParams } from 'react-router-dom'



const SearchPage = () => {
    const params = useParams()
    return (
        <div>{params.text}</div>
    )
}

export default SearchPage