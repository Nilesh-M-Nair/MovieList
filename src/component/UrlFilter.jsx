import React from 'react';
import User from './User';


function UrlSet() {
  const [movieID, setMovieID] = React.useState([]);

  React.useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=7aecf10a1be54c901c7f16fb48b23cc8&language=en-US&page=1')
      .then(results=> results.json())
      .then(data => {
       const {results} = data;
       setMovieID(results);
        
      });
 
  }, []); // <-- Have to pass in [] here!
  console.log(movieID)
  return (
    
    <div>
      <User name = {movieID}/>
    </div>
  );
}
//
export default UrlSet;