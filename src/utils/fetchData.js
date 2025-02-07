// getting options from rapid api
export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    "x-rapidapi-key": "a5366c16e1msh7d94ed47fa92ddcp100999jsn6c7331feeb02",
  },
};

// fetching data by url and options and getting response in json format
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
