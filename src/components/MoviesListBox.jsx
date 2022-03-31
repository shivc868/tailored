import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
const MoviesListBox = ({ loading }) => {
  const [lastMovie, setLastMovie] = useState();
  const moviesList = useSelector((state) => state.Movies.moviesList);

  useEffect(() => {
    if (moviesList.length > 0) {
      let max = moviesList.reduce((a, b) =>
        a.release_date > b.release_date ? a : b
      );
      setLastMovie(max);
    }
  }, [moviesList]);
  return (
    <>
      <div className="movies-list-wrapper mt-5">
        {loading ? (
          <>
            <div className="d-flex h-100 justify-content-center align-items-center">
              <CircularProgress />
            </div>
          </>
        ) : (
          moviesList.map((item, index) => {
            return (
              <div key={index} className="movies-list">
                <h6 className="mb-0">{item.title}</h6>
              </div>
            );
          })
        )}
        {!loading && moviesList.length == 0 && (
          <div className="d-flex h-100 justify-content-center align-items-center">
            <h6>No Movies Found</h6>
          </div>
        )}
      </div>

      {!loading && lastMovie && (
        <div className="last-movie-wrapper mt-5">
          <div>
            <h6> Name / Year last movie </h6>
          </div>
          <div className="d-flex">
            <div className="last-movie-title">
              <p>{lastMovie.title}</p>
            </div>
            <div className="ms-4 last-movie-release-date">
              <p>{lastMovie.release_date}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MoviesListBox;
