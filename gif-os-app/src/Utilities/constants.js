//variables de endpoint
const URLGiphy = "https://api.giphy.com/v1"
const APIKey = "api_key=MmD3CusxRY7kxpOjRPNJPQWpeJOD4hgj"

function APIRequest (url) {
    return fetch (`${URLGiphy}/gifs/search?${APIKey}&q=${url}&limit=20&offset=0&rating=g&lang=en`)
};


//Fetch for the suggest gif search
function APISuggest(url) {
    return fetch(`${URLGiphy}/gifs/search/tags?${APIKey}&q=${url}&limit=5&offset=0&rating`)
}


export {APIRequest, APISuggest};