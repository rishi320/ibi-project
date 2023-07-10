import React, { useEffect, useState } from 'react';
import {useNavigate, useLocation } from 'react-router';
import { fetchMovieDetails } from '../../api/fetchMovies';

function Details() {
    const navigate = useNavigate()
    const location = useLocation()
    const id = location.state.id
    const [details, setDetails] = useState()

    useEffect(()=>{
        fetchMovieDetails(id).then(data=>setDetails(data));

    },[])
  console.log("param",id)
  return (
    <div>
        <p onClick={()=>navigate("/")}>Back</p>
        {details && <>
            <h2>{details.Title}</h2>
            <h3>{details.Plot}</h3>
            <h4>{details.Genre}</h4>
        </>
        }
        
    </div>
  )
}

export default Details