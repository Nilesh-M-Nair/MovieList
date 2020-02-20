import React from 'react';
import './App.css';
import User from './component/User.component';


function App() {
  const [movieGenres, setMovieGenres] = React.useState([]);

  React.useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7aecf10a1be54c901c7f16fb48b23cc8&language=en-US')
      .then(results=> results.json())
      .then(data => {
       const {genres} = data;
        setMovieGenres(genres);
        
      });
      
  }, []); // <-- Have to pass in [] here!

  return (
    
    <div>
      <User name = {movieGenres}/>
    </div>
  );
}

export default App;