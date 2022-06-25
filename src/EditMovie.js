import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { navigate,useNavigate,Navigate,useParams } from 'react-router-dom';

export function EditMovie() {

    const { id } = useParams();
    console.log(id);
    // console.log(movieList[id]);
    // const movie = movieList[id];
  
    const [movie, setMovie] = useState(null);
  
    const getMovie = () => {
      fetch(`https://62a9705dec36bf40bdb78503.mockapi.io/movies/${id}`, {
        method: "GET",
      })
        .then((data) => data.json())
        .then((mv) => setMovie(mv));
    };
  
    useEffect(() => getMovie(), []);

    return movie ? <EditMovieForm movie={movie} /> : "Loading...";

function EditMovieForm({ movie }) {
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const navigate = useNavigate();

  const editMovie = () => {
    const updatedMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summar: summary,
      trailer:trailer,
    };

    // setMovieList([...movieList, newMovie]);
    
    fetch(`https://62a9705dec36bf40bdb78503.mockapi.io/movies`, {
      method: "POST",
      body: JSON.stringify(updatedMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => navigate("/movies"));


    console.log(updatedMovie);
  };



  return (
    <div className="add-movie-form">
      <TextField
        label="Name" variant="outlined"
        onChange={(event) => setName(event.target.value)} />
      <TextField
        label="Poster" variant="outlined"
        onChange={(event) => setPoster(event.target.value)} />
      <TextField
        label="Rating" variant="outlined"
        onChange={(event) => setRating(event.target.value)} />
      <TextField
        label="Summary" variant="outlined"
        onChange={(event) => setSummary(event.target.value)} />
        <TextField
        label="Trailer" variant="outlined"
        onChange={(event) => setTrailer(event.target.value)} />
      <Button onClick={editMovie} variant="outlined" color="success">
        Save
      </Button>
    </div>
  );

  }
}
