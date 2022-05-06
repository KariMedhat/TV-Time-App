const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "896e8f1d1bbca56d402bb80f5b1bae2c",
  originalImg: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500lImg: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
