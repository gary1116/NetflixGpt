import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";


const useUpcomingMovies = ()=>{

     const dispatch = useDispatch();
      //getting movies through tmdb getmovies api
      const getUpcomingMovies = async ()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const json = await data.json();
        // console.log(json);
        // putting movies in the movies store
        dispatch(addUpcomingMovies(json.results));
      };
      // calling the getNowPlayingMovies once so that the api is called once 
      useEffect(()=>{
        getUpcomingMovies();
      },[]);
}

export default useUpcomingMovies;