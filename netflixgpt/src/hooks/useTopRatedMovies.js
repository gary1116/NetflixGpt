import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";


const useTopRatedMovies = ()=>{

     const dispatch = useDispatch();
      //getting movies through tmdb getmovies api
      const getTopRatedMovies = async ()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const json = await data.json();
        // console.log(json);
        // putting movies in the movies store
        dispatch(addTopRatedMovies(json.results));
      };
      // calling the getNowPlayingMovies once so that the api is called once 
      useEffect(()=>{
        getTopRatedMovies();
      },[]);
}

export default useTopRatedMovies;