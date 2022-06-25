import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

import {useFormik} from "formik";
import * as yup from "yup";

const movieValidationSchema =yup.object({
  name:yup.string()
  .required("why not fill this name ?"),
  poster:yup.string()
  .required("why not fill this poster ? ")
  .min(5,"Need a bigger poster"),
  rating : yup.number()
  .required("why not fill this rating?"),
  summary:yup.string()
  .required("why not fill this summary ?")
  .min(5,"Need a bigger summary"),
  trailer : yup
  .string()
  .required("why not fill this trailer?")
  .min(5,"Need a bigger trailer"),
});

export function AddMovie() {
  const navigate = useNavigate();

  const {handleSubmit, values , handleChange, handleBlur, touched, errors} = 
   useFormik({
    initalValues:{
      name:"",
      poster: "",
      rating: "",
      summar: "",
      trailer:"",
    } ,
    validationSchema: movieValidationSchema,
    onSubmit:(newMovie) =>{
      console.log("onSubmit", newMovie);
      addMovie(newMovie);
    }
  });

  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  // const navigate = useNavigate();

  // const addMovie = () => {
  //   const newMovie = {
  //     name: name,
  //     poster: poster,
  //     rating: rating,
  //     summar: summary,
  //     trailer:trailer,
  //   };

    // setMovieList([...movieList, newMovie]);
    
const addMovie =(newMovie) =>{
    fetch(`https://62a9705dec36bf40bdb78503.mockapi.io/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/movies"));


    console.log(newMovie);
  };


  

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <TextField
        label="Name" variant="outlined"
        name="name" 
       value={values.name}
       onChange={handleChange}
       onBlur={handleBlur}
       error={touched.name && errors.name}
       helperText={touched.name && errors.name ? errors.name : ""}

        />
        

      <TextField
        label="Poster" variant="outlined"
        name="poster" 
       value={values.poster}
       onChange={handleChange}
       onBlur={handleBlur}
       error={touched.poster && errors.poster}
       helperText={touched.poster && errors.poster ? errors.poster : ""}
        />
      

      <TextField
        label="Rating" variant="outlined"
        name="rating" 
       value={values.rating}
       onChange={handleChange}
       onBlur={handleBlur}
       error={touched.rating && errors.rating}
       helperText={touched.rating && errors.rating ? errors.rating : ""}
        />
        
      
      <TextField
        label="Summary" variant="outlined"
        name="summary" 
       value={values.summary}
       onChange={handleChange}
       onBlur={handleBlur}
       error={touched.summary && errors.summary}
       helperText={touched.summary && errors.summary ? errors.summary : ""}
        />
        
       
       <TextField
        label="Trailer" variant="outlined"
        name="trailer" 
       value={values.trailer}
       onChange={handleChange}
       onBlur={handleBlur}
       error={touched.trailer && errors.trailer }
       helperText={touched.trailer && errors.trailer ? errors.trailer : ""}
        />
        
      <Button type="submit"  variant="outlined">
        Add Movie
      </Button>
    </form>
  );

}
