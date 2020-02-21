import React from 'react';
import User from './User';


function UrlSet() {
  const [movieName, setMovieName] = React.useState([]);

  React.useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=7aecf10a1be54c901c7f16fb48b23cc8&language=en-US&page=1')
      .then(results=> results.json())
      .then(data => {
       const {results} = data;
       setMovieName(results);
        
      });
 
  }, []); // <-- Have to pass in [] here!
  console.log(movieName)
  return (
    
    <div>
      <User name = {movieName}/>
    </div>
  );
}
//
export default UrlSet;