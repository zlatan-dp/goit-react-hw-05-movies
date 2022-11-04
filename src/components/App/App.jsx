import { Routes, Route } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';
import { Home } from 'components/Pages/Home';
import { Movies } from 'components/Pages/Movies';
import { MovieDetail } from 'components/Pages/MovieDetail';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies" end>
            Movies
          </Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetail />} />
      </Routes>
    </Container>
  );
};
