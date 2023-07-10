export async function fetchMovies(search, page){
   if(search !== ""){
    const data = await fetch(`https://www.omdbapi.com/?s=${search}&page=${page}&apikey=982ff953`);
    console.log("data", data);
    return data.json();
   }
  
   return []
}

export async function fetchMovieDetails(id){
    const data = await fetch(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=982ff953`);
    console.log("data", data);
    return data.json();
}