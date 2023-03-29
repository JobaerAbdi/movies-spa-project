import React from 'react';

const DisplayMovies = ({movie,handelAddToCart}) => {
    const {poster,movieName,imdbRating,watchTime,description,category} = movie;
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
  <figure><img className='w-42 h-40 mt-2' src={poster} alt="Movies" /></figure>
  <div className="card-body">
<h2 className="card-title">{movieName}!</h2>
    <p>Description : {description}</p>
    <p>WatchTime : {watchTime}</p>
    <p>Rating : {imdbRating}</p>
  </div>
  <div className="card-actions">
      <button onClick={()=>handelAddToCart(watchTime)} className="btn btn-info w-9/12 mx-auto mb-3">Book Now</button>
    </div>
</div>
        </div>
    );
};

export default DisplayMovies;