import React, { useState, useEffect } from 'react';
import Main from './Main';
import SearchResults from './SearchResults';
export default function MovieCard() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const bondMovies = async (searchValue) => {
    if (searchValue.length < 3) {
      setMovies([]);
      return;
    }
    const response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=c0e51189`);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    }
  };
  useEffect(() => {
    if (searchValue !== '') {
      bondMovies(searchValue);
    }
  }, [searchValue]);
  useEffect(() => {
    bondMovies('james bond');
  }, []);
  return (
        <div id='test1'>
      <SearchResults searchValue={searchValue} setSearchValue={setSearchValue} />
      {movies.map((item, index) => (
          <Main key={index} img={item.Poster} alt="" title={item.Title} year={item.Year} />
          ))}
          </div>
  );
}
