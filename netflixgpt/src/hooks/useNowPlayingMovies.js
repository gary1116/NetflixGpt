import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";


const useNowPlayingMovies = ()=>{

     const dispatch = useDispatch();
      //getting movies through tmdb getmovies api
      const getNowPlayingMovies = async ()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    
        const json = await data.json();
        // console.log(json);
        // putting movies in the movies store
        dispatch(addNowPlayingMovies(json.results));
      };

    
      // calling the getNowPlayingMovies once so that the api is called once 
      useEffect(()=>{
        getNowPlayingMovies();
      },[]);
}

export default useNowPlayingMovies;