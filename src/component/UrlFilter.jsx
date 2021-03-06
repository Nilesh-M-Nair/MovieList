import React from 'react';
import Avatar  from '../component/Avatar';
import UserView from './UserView';


function UrlFilter(props) {
  const [movieID, setMovieID] = React.useState([]);
 
  React.useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=7aecf10a1be54c901c7f16fb48b23cc8&language=en-US&page=1')
      .then(results=> results.json())
      .then(data => {
       const {results} = data;
        setMovieID(results);
        for(let i = 0; i< results.length; i++){
          if(props.id.id == results[i].id){
            console.log('hi', results[i].id)
            setMovieID(results[i]);
            
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
}*/

  return (
    
    <div>
      <Avatar source = {movieID}/> 
      <UserView source = {movieID} />
    </div>
  );
  }
export default UrlFilter;