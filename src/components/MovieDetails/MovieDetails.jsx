import { fetchMovieDetail } from 'Api';
import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { MovieInfoWrap, MovieInfo } from './MovieDetails.styled';

export const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovieDetail(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  const {
    title,
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;
  return (
    <main>
      <Link to={backLink}>Back to movies</Link>
      <MovieInfoWrap>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={original_title}
            width="200px"
          />
        </div>
        <MovieInfo>
          <h2>
            {title} ({release_date.slice(0, 4)})
          </h2>
          <p>Rating: {vote_average.toFixed(2)}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(' ')}</p>
        </MovieInfo>
      </MovieInfoWrap>
      <div>
        <p>Additional iformation</p>
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};
