import axios from "axios";

export const MOVIES_LIST = "MOVIES_LIST";
export const CHARACTERS_DATA = "CHARACTERS_DATA";

const getCharactersDataSuccess = (data) => ({
  type: CHARACTERS_DATA,
  data,
});

const getMoviesListSuccess = (data) => ({
  type: MOVIES_LIST,
  data,
});
// GET CHARACTERS DATA ACTION
export const GetcharactersData = (setLoading) => async (dispatch) => {
  try {
    setLoading(true);
    const response = await axios.get(`https://swapi.dev/api/people/`);
    if (response) {
      let data = [];
      const totalPage = Math.floor(response.data.count / 10 + 1);
      for (let i = 1; i <= totalPage; i++) {
        const response = await axios.get(
          `https://swapi.dev/api/people/?page=${i}`
        );
        if (response) {
          data.push(...response.data.results);
          setLoading(false);
        } else {
          setLoading(false);
        }
      }
      dispatch(getCharactersDataSuccess(data));
    }
  } catch (error) {
    setLoading(false);
  }
};
// GET MOVIES LIST ACTION
export const getMoviesList = (setLoading, films) => async (dispatch) => {
  setLoading(true);
  try {
    setLoading(true);
    let data = [];

    for (let i = 1; i <= films.length; i++) {
      const response = await axios.get(`${films[i - 1]}`);
      if (response.status === 200) {
        data.push(response.data);
      } else {
        setLoading(false);
      }
    }
    setLoading(false);
    dispatch(getMoviesListSuccess(data));
  } catch (error) {
    setLoading(false);
  }
};
