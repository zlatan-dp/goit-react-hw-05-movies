import { fetchMovieCast } from 'Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const MovieCast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(setMovieCast);
  }, [movieId]);

  //   console.log(movieCast);

  if (!movieCast) {
    return;
  }

  return (
    <div>
      <ul>
        {movieCast.map(actor => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path &&
                `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
              }
              alt={actor.original_name}
              width="100px"
            />
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
