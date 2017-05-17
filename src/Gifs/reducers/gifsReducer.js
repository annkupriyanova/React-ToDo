import { FETCH_GIFS_REQUEST, FETCH_GIFS_SUCCESS, FETCH_GIFS_FAILURE }  from '../actions/gifsActions'

const gifsReducer = (state = {status: "", urls: []}, action) => {
    switch (action.type) {
        case FETCH_GIFS_REQUEST:
            return {...state, ...{ status: `Fetching ${action.value}...` }};
        
        case FETCH_GIFS_SUCCESS:
            return {...state, ...{ 
                status: "Fetching is done successfully", 
                urls: action.urls 
            }};

        case FETCH_GIFS_FAILURE:
            return {...state, ...{ status: action.error }};
        
        default:
            return state;
    }
}

export default gifsReducer