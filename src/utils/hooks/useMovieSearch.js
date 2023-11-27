import { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';
import { SHORT_FILM } from '../constants/config';

const useMovieSearch = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [showedMovies, setShowedMovies] = useState([]);
  const [shortMovie, setShortMovie] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('');
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
  const [savedShortMovie, setSavedShortMovie] = useLocalStorage('shortMovie', '')
  const [savedSearchWord, setSavedSearchWord] = useLocalStorage('searchWord', '')
  const [savedAllMovies, setSavedAllMovies] = useLocalStorage('movies', [])
  const [savedFilteredMovies, setSavedFilteredMovies] = useLocalStorage('filteredMovies', [])

  useEffect(() => {
    setShortMovie(savedShortMovie);
  }, []);

  useEffect(() =>{
    setSavedAllMovies(allMovies)
  }, [allMovies])

  const handleFilter = (movies, shortMovie, searchWord) => {
    return movies.filter(movie => {
      if (shortMovie) {
        return movie.nameRU.toLowerCase().includes(searchWord.toLowerCase()) && movie.duration <= SHORT_FILM;
      } else {
        return movie.nameRU.toLowerCase().includes(searchWord.toLowerCase());
      }
    });
  };

  const handleFilterMovies = (searchValue) => {
    setSavedSearchWord(searchValue);
    setSavedShortMovie(shortMovie)
    setSearchWord(searchValue)
    setSavedFilteredMovies(handleFilter(savedAllMovies, shortMovie, searchValue))
  };

  const handleGetInSaveMovies = (searchValue) => {
    setShowedMovies(handleFilter(savedMoviesList, shortMovie, searchValue));
  };

  return {
    allMovies,
    setAllMovies,
    savedFilteredMovies,
    shortMovie,
    setShortMovie,
    searchWord,
    setSearchWord,
    isFetching,
    setIsFetching,
    error,
    setError,
    isModalErrorOpen,
    setIsModalErrorOpen,
    savedMoviesList,
    setSavedMoviesList,
    showedMovies,
    setShowedMovies,
    savedSearchWord,
    setSavedSearchWord,
    savedShortMovie,
    setSavedShortMovie,
    setSavedFilteredMovies,
    handleFilter,
    handleFilterMovies,
    handleGetInSaveMovies,
  };
};

export default useMovieSearch;
