import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";


const usePopularMovies = ()=>{

     const dispatch = useDispatch();
      //getting movies through tmdb getmovies api
      const getPopularMovies = async ()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
    
        const json = await data.json();
        // console.log(json);
        // putting movies in the movies store
        dispatch(addPopularMovies(json.results));
      };

    
      // calling the getPopularMovies once so that the api is called once 
      useEffect(()=>{
        getPopularMovies();
      },[]);
}

export default usePopularMovies;