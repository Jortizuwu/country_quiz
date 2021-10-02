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
      const url = `http://api.countrylayer.com/v2/all?access_key=201810d8d29102d389ce69d4d24f54d4`;
      const data = await fetch(url);
      const resp = await data.json();
      dispatch(fetchCitySuccess(resp));
    } catch (error) {
        dispatch(fetchCityFail(error))
    }
  };
};
