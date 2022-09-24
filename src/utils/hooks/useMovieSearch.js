import { useEffect, useState } from 'react';
import * as MoviesApi from '../MoviesApi';

const useMovieSearch = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [showedMovies, setShowedMovies] = useState([]);
  const [shortMovie, setShortMovie] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('');

  const handleFilter = (movies, shortMovie, searchWord) => {
    return movies.filter(movie => {
      if (shortMovie) {
        return movie.nameRU.toLowerCase().includes(searchWord.toLowerCase()) && movie.duration <= 40;
      } else {
        return movie.nameRU.toLowerCase().includes(searchWord.toLowerCase());
      }
    });
  };

  useEffect(() => {
    setFilterMovies(handleFilter(allMovies, shortMovie, searchWord));
  }, [allMovies]);

  const handleGetMovies = (searchValue) => {
    setSearchWord(searchValue.search);
    setIsFetching(true);
    MoviesApi.getMovies()
      .then(movies => {
        setAllMovies(movies);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => setIsFetching(false));
  };

  const handleGetInSaveMovies = (searchValue) => {
    setShowedMovies(handleFilter(savedMoviesList, shortMovie, searchValue.search));
  };

  return {
    allMovies,
    setAllMovies,
    filterMovies,
    setFilterMovies,
    shortMovie,
    setShortMovie,
    searchWord,
    setSearchWord,
    isFetching,
    setIsFetching,
    error,
    setError,
    savedMoviesList,
    setSavedMoviesList,
    showedMovies,
    setShowedMovies,
    handleFilter,
    handleGetMovies,
    handleGetInSaveMovies,
  };
};

export default useMovieSearch;
