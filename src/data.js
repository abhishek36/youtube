export const API_KEY = "AIzaSyB8wb2o6kKLZaU0UW9N5BcTRk86IJB4olg";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
