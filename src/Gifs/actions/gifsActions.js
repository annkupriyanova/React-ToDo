import axios from 'axios'

export const FETCH_GIFS_REQUEST = 'FETCH_GIFS_REQUEST'
export const FETCH_GIFS_SUCCESS = 'FETCH_GIFS_SUCCESS'
export const FETCH_GIFS_FAILURE = 'FETCH_GIFS_FAILURE'

function retrieveUrls({data}) {
  console.log(data)
  const { data: dataArr } = data
  const urls = dataArr.map(gif => gif.images.fixed_height.url)
  return urls
}

const fetchGifsRequest = (value) => ({
    type: FETCH_GIFS_REQUEST,
    value
})

const fetchGifsSuccess = (urls) => ({
    type: FETCH_GIFS_SUCCESS,
    urls
})

const fetchGifsFailure = (error) => ({
    type: FETCH_GIFS_FAILURE,
    error
})

export const fetchGifs = (value, numberOfElements) => {
    return function(dispatch){
        dispatch(fetchGifsRequest(value))
        return axios.get('http://api.giphy.com/v1/gifs/search',{
                params: {
                    q: value,
                    limit: numberOfElements,
                    api_key: 'dc6zaTOxFJmzC'
                }
            })
            .then(data => retrieveUrls(data))
            .then(urls => dispatch(fetchGifsSuccess(urls)))
            .catch(error => dispatch(fetchGifsFailure(error)))
    }
}



