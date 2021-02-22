const httpService = {};
let address = `http://${process.env.REACT_APP_SERVER_ADDRESS}:${process.env.REACT_APP_SERVER_PORT}`;
if (process.env.NODE_ENV === "production") {
    address = process.env.REACT_APP_PRODUCTION_SERVER_ADDRESS;
}
httpService.get = (route) => {
    return window.fetch(`${address}/${route}`);
};

export const getRedditFrontPage = (pageNumber) =>
    httpService.get(`reddit/${pageNumber}`);

export const getSubreddit = (name, pageNumber) =>
    httpService.get(`reddit/subreddit/${name}/${pageNumber}`);

export const getYoutubeTrending = (pageNumber) =>
    httpService.get(`youtube/${pageNumber}`);
