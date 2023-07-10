import React, { useState, useEffect } from 'react';
import {fetchMovies} from '../../api/fetchMovies';
import Card from '../../components/Card';

function Home() {
    const [page, setPage] = useState(1);
    const [value, setValue] = useState("")
    const [search, setSearch] = useState("");
    const [moviesData, setMoviesData] = useState([]);
    const [totalPages, setTotalPages] = useState();
    // const moviesData = fetchMovies(search, page);
    useEffect(() => {

      fetchMovies(search,page).then((data)=>
      {
        setMoviesData(data);
        let totalpages = Math.ceil(data.totalResults / 10);
        setTotalPages(totalpages);
      })
   
    }, [search, page])

    function handleInput(){
        setSearch(value);
    }
    console.log("movies data", moviesData, totalPages);

    function handlePrev(){
        setPage(page=>page-1)
    }

    function handleNext(){
        setPage(page=>page+1)
    }
  return (
    <div>
        <input onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={handleInput}> Search</button>
        {moviesData.Search && moviesData.Search.map((data,i)=><Card data={data} />)}
        {moviesData.Response === "True" && <>
            <div style={{display:"flex"}}>
        <button onClick={handlePrev} disabled={page===1}>prev</button>
        <p>{page}</p>
        <button onClick={handleNext} disabled={page===totalPages}>next</button>
        </div>
        </>}
       
        
    </div>
  )
}

export default Home