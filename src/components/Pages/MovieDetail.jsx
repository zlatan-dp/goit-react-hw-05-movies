import { fetchMovieDetail } from 'Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetail(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }
  return <main>movie - {movie.title}</main>;
};
