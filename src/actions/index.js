import {FETCH_GITHUB_DATA} from "./types";
import axios from 'axios'

const apiUrl = 'https://api.github.com/users/KrunalLathiya';

export const fetchData = (data) => {
    return {
        type: FETCH_GITHUB_DATA,
        data
    }
};

export const fetchGithubData = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                dispatch(fetchData(response.data))
            })
            .catch(error => {
                throw(error);
            });
    }
};

/*
    Note : Reducer là một pure fuction, và ta không nên gọi lời gọi bất đồng bộ nào bên trong reducer,
    tất cả các action không đồng bộ được gọi bên trong actions.
 */


