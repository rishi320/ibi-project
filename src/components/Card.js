import React from 'react';
import { useNavigate } from "react-router-dom";

function Card({data}) {

    const navigate = useNavigate()

  return (
    <div style={{width:"500px",border:"1px solid gray"}} onClick={()=>navigate("/details",{state:{id:data.imdbID}})}>
        <h3>{data.Title}</h3>
        <h4>{data.Type}</h4>
        <p>{data.Year}</p>

    </div>
  )
}

export default Card