import axios from 'axios';

export const FETCH_POSTS = 'fetch_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com';
const API_KEY = '?key=DORAVENTUREIRA123';

export const fetchPosts = () => {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
    return {
        type: FETCH_POSTS,
        payload: request
    }
}