import MovieCard from "./MovieCard";
import { movieList } from "../constants";
import { useState } from "react";

function filterData(searchMovie, movie) {
    return movie.filter((movie) =>
      movie?.moviegenres?.includes(searchMovie) || movie?.movielanguages?.includes(searchMovie) || movie?.moviecountries?.includes(searchMovie)
    );
  }

const Body = () => {
  const [movie, setMovie] = useState(movieList);
  const [FilteredMovie, setFilteredMovieMovie] = useState(movieList);
  const [searchMovie, setSearchMovie] = useState();
  return (
    <>
      <div className="header">
        <input
          type="text"
          placeholder="Enter Movie Language, Genre or Country"
          value={searchMovie}
          onChange={(e) => {
            setSearchMovie(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setFilteredMovieMovie(filterData(searchMovie, movie));
          }}
        >
          Search
        </button>
      </div>
      <div className="body-container">
        {FilteredMovie.map((movie) => {
          return <MovieCard movie={movie} key={movie.imdbmovieid} />;
        })}
      </div>
    </>
  );
};

export default Body;
