import React, { useState, useEffect } from 'react';
import Main from './Main';
import SearchResults from './SearchResults';
export default function MovieCard() {
  const [movies, setMovies] = useState([]);
  const [søkeResultat, setsøkeResultat] = useState("");
  
  const bondFilmer = async (søkeResultat) => {
    if (søkeResultat.length < 3) {
      setMovies([]);
    }

    const response = await fetch(`http://www.omdbapi.com/?s=${søkeResultat}&type=movie&apikey=c0e51189`);
    const data = await response.json();
    if (data.Search) {
        const filmDetaljer = await Promise.all(data.Search.map(async(film)=> {
        const response = await fetch(`http://www.omdbapi.com/?i=${film.imdbID}&plot=short&apikey=c0e51189`);
        const data = await response.json();
        return {
          ...film,
          sjanger: data.Genre,
          regissør: data.Director,
          skuespillere: data.Actors,
          priser: data.Awards
        };
      }));
      setMovies(filmDetaljer);
    }
  };
  useEffect(() => {
    bondFilmer("James-Bond");
  }, []);
  
  useEffect(() => {
    if (søkeResultat !== "") {
      bondFilmer(søkeResultat);
    } else if(søkeResultat === ""){
      bondFilmer("James-Bond")
    }
  },[søkeResultat]);

  return (
        <div>
      <SearchResults søkeResultat={søkeResultat} setsøkeResultat={setsøkeResultat} />
      {movies.map((item) => {
         if (item.priser === "N/A") {
          item.priser = "Ingen priser dessverre:(";
        }
        return(
       <Main key={item.imdbID} img={item.Poster} title={item.Title} år={item.Year} sjanger={item.sjanger} regissør={item.regissør} skuespillere={item.skuespillere} priser={item.priser}
      />
        )
    })}
      </div> 
  );
}

