import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Home } from 'components/Pages/Home';
// import { Movies } from 'components/Pages/Movies';
import { MovieDetail } from 'components/MovieDetails/MovieDetails';
import { MovieCast } from 'components/MovieCast/MovieCast';
import { MovieReviews } from 'components/MovieReviews/MovieReviews';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const Movies = lazy(() => import('../Pages/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetail />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
