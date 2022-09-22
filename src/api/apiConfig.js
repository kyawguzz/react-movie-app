const apiConfig = {
    baseUrl : 'https://api.themoviedb.org/3/',
    apiKey: '6527aacb23d3141276f51d7563db0233',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) =>  `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;