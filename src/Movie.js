import { useState } from "react";
import { MovieList } from "./MovieList";
import { useNavigate, Link } from "react-router-dom";
import { Counter } from "./Counter";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import InfoIcon from "@mui/icons-material/Info";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function Movie({ movie, id, deleteButton,editButton }) {
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  const [show, setShow] = useState(true);

  const paraStyles = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();

  return (
    <Card className="outer" sx={{ height: "min-content" }}>
      <img className="poster" src={movie.poster} alt={movie.name} />
      <CardContent>
        <div className="inner">
          <h2>
            {movie.name}
            <IconButton
              color="primary"
              onClick={() => navigate(`/movies/${id}`)}
              aria-label="Movie-details"
            >
              <InfoIcon />
            </IconButton>
            <IconButton
              color="primary"
              onClick={() => setShow(!show)}
              aria-label="Movie-details"
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </h2>
          <p style={styles}> ⭐{movie.rating}</p>
        </div>
        {/* <p style={paraStyles} className="cont">{movie.summary}</p> */}

        {show ? <p className="cont"> {movie.summary}</p> : null}
      </CardContent>
      <CardActions>
      <Counter /> {deleteButton} {editButton}
      </CardActions>
    </Card>
  );
}
