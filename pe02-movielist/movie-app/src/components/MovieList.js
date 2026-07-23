import React, { useState } from "react";

const MovieList = () => {
  const movies = [
    {
      title: "Inception",
      genre: "Science Fiction",
      releaseYear: 2010,
    },
    {
      title: "The Shawshank Redemption",
      genre: "Drama",
      releaseYear: 1994,
    },
    {
      title: "The Dark Knight",
      genre: "Action",
      releaseYear: 2008,
    },
    {
      title: "Titanic",
      genre: "Romance",
      releaseYear: 1997,
    },
    {
      title: "Interstellar",
      genre: "Science Fiction",
      releaseYear: 2014,
    },
    {
      title: "Avengers: Endgame",
      genre: "Action",
      releaseYear: 2019,
    },
    {
      title: "Forrest Gump",
      genre: "Drama",
      releaseYear: 1994,
    },
    {
      title: "La La Land",
      genre: "Musical",
      releaseYear: 2016,
    }
  ];

  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const genres = [
    "All Genres",
    ...new Set(movies.map((movie) => movie.genre)),
  ];

  const filteredMovies =
    selectedGenre === "All Genres"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  const handleMovieClick = (title) => {
    alert(`You clicked on "${title}"`);
  };

  return (
    <div className="movie-container">
      <h1>Movie List</h1>

      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        {genres.map((genre) => (
          <option key={genre}>{genre}</option>
        ))}
      </select>

      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <div
            key={movie.title}
            className="movie-card"
            onClick={() => handleMovieClick(movie.title)}
          >
            <h2>{movie.title}</h2>

            <p className="genre">{movie.genre}</p>

            <p>Released: {movie.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;