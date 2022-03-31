import { MOVIES_LIST, CHARACTERS_DATA } from "../action/MoviesActions";
const initialState = {
  moviesList: [],
  charactersData: [],
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIES_LIST: {
      return {
        ...state,
        moviesList: action.data,
      };
    }
    case CHARACTERS_DATA: {
      return {
        ...state,
        charactersData: action.data,
      };
    }
    default:
      return state;
  }
}
