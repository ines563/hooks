
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {moviedata} from "./data";
import Filter from './comp/filtre/Filter';
import MovieList from './comp/movielist/MovieList';
import AddMovie from './comp/addmovie/AddMovie';
import { useState } from "react";

function App() {
  const [movielist, setMovielist] = useState(moviedata);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0)
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const ratingChanged = (newRating) => {
    setRate(newRating)
  };
  const handleAdd = (newMovie) => {
    setMovielist([...movielist,newMovie])
  }
  
  return (
    <div className="App">
      <Filter handleChange={handleChange} title={title} ratingChanged={ratingChanged} />
      <MovieList
        movielist={movielist.filter((movie) =>
          movie.title.trim().toLowerCase().includes(title.trim().toLowerCase()) && movie.rate>=rate
        )}
      />
      <AddMovie handleAdd = {handleAdd} />
    </div>
  );
}

export default App; 
