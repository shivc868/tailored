import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import MoviesListBox from "./components/MoviesListBox";
import { GetcharactersData, getMoviesList } from "./redux/action/MoviesActions";
function App() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  let charactersData = [];
  charactersData = useSelector((state) => state.Movies.charactersData);

  useEffect(() => {
    dispatch(GetcharactersData(setLoading));
  }, []);
  const charactersOnchangeHandler = (newValue) => {
    const films = newValue.films;
    dispatch(getMoviesList(setLoading, films));
  };

  return (
    <>
      <main>
        <div className="container py-5">
          <Autocomplete
            id="combo-box-demo"
            options={charactersData}
            getOptionLabel={(option) => option.name}
            sx={{
              maxWidth: 400,
              backgroundColor: "grey",
              borderRadius: "6px",
              padding: "10px",
              borderColor: "transparent",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
            }}
            onChange={(e, newValue) => {
              charactersOnchangeHandler(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{
                  borderColor: "transparent",
                  fontSize: "30px",
                }}
                label="Charactor"
              />
            )}
          />
          <MoviesListBox loading={loading} />
        </div>
      </main>
    </>
  );
}

export default App;
