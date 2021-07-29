function APIRequest (url) {
    return fecth (`https://api.giphy.com/v1/gifs/search?api_key=MmD3CusxRY7kxpOjRPNJPQWpeJOD4hgj&q=${url}&limit=12&offset=0&rating=g&lang=en`)
};


//Fetch for the suggest gif search
function APISuggest(url) {
    return fetch(`https://api.giphy.com/v1/gifs/tags?api_key=MmD3CusxRY7kxpOjRPNJPQWpeJOD4hgj&q=${url}&limit=12&offset=0`)
}


export {APIRequest, APISuggest};