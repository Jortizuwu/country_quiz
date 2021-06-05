import { types } from "../types/types";

export const fetchCitySuccess = (countrys) => {
  return {
    type: types.country_success,
    payload: countrys,
  };
};

export const fetchCityFail = (error) => {
  return {
    type: types.country_failure,
    payload: error,
  };
};

export const fetchApi = () => {
  return async (dispatch) => {
    try {
      const url = `https://restcountries.eu/rest/v2/all`;
      const data = await fetch(url);
      const resp = await data.json();
      dispatch(fetchCitySuccess(resp));
    } catch (error) {
        dispatch(fetchCityFail(error))
    }
  };
};
