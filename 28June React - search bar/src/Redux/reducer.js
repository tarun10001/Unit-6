import { ADD_DATA, GET_DATA, SORT } from "./action";

const initialState = {
  storeData: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA: {
      return {
        ...state,
        storeData: payload,
      };
    }

    case ADD_DATA: {
      return {
        ...state,
        storeData: payload,
      };
    }

    case SORT: {
      if (payload === "desc") {
        return {
          ...state,
          storeData: [...state.storeData].sort((a, b) =>
            a.population < b.population
              ? 1
              : a.population > b.population
              ? -1
              : 0
          ),
        };
      } else {
        return {
          ...state,
          storeData: [...state.storeData].sort((a, b) =>
            a.population > b.population
              ? 1
              : a.population < b.population
              ? -1
              : 0
          ),
        };
      }
    }
    default:
      return state;
  }
};