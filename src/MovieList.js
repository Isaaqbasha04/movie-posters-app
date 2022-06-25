import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import { useNavigate } from 'react-router-dom';

export function MovieList() {
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch("https://62a9705dec36bf40bdb78503.mockapi.io/movies", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };

  useEffect(() => getMovies(), []);

  const deleteMovie = (id) => {
    fetch(`https://62a9705dec36bf40bdb78503.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="movie-list">
        {movieList.map((mv) => (
          <Movie
            key={mv.id}
            movie={mv}
            id={mv.id}
            deleteButton={
              <button className="delete" onClick={() => deleteMovie(mv.id)}>Delete me</button>
            }
            editButton={
              <button onClick={() => navigate(`/movies/edit/${mv.id}`)}>
                Edit
                </button>
            }
          />
        ))}
      </div>
    </div>
  );
}
