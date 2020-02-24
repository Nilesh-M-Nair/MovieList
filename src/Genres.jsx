/*
import React from 'react';
import UserView from './UserView';


function UrlFilter(props) {
  const [movieGenre, setMovieGenre] = React.useState([]);
  let gene = [];
  React.useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7aecf10a1be54c901c7f16fb48b23cc8&language=en-US')
      .then(results=> results.json())
      .then(data => {
       const {genres} = data;
       setMovieGenre(genres);
        for(let i = 0; i< genres.length; i++){
          if(props.id.id == genres[i].id){
            console.log('hi', genres[i].id)
            gene[i] = setMovieGenre(genres.name)
            
          }
        }
      });

  }, [props.id.id]); // <-- Have to pass in [] here!
  
  
  
  /*
  console.log('hello', props)
  console.log('movie', movieID.length)
for(let i = 0; i< movieID.length; i++){
  // console.log('hi', props.id.id, movieID[i].id)
if(props.id.id == movieID[i].id){
  console.log('hi', movieID[i].id)
  setMovieID(results[i]);
} * add comment here i.e '/'

  return (
    
    <div>
      <UserView source = {gene} />
    </div>
  );
  }
export default UrlFilter;

*/