import { fetchTrendingMovies } from 'Api';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
