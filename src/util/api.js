const httpService = {};
httpService.get = (route) => {
  return window.fetch(
    `http://${process.env.REACT_APP_SERVER_ADDRESS}:${process.env.REACT_APP_SERVER_PORT}/${route}`
  );
};

export const getRedditFrontPage = () => httpService.get(`reddit`);

export const getYoutubeTrending = () => httpService.get(`youtube`);
