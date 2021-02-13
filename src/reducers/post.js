import { CREATE, FETCH_ALL, UPDATE, DELETE } from "../constants/actionTypes";

export const Posts = (posts = [], action) => {
    switch (action.type) {
        case CREATE:
            return [...posts, action.payload];
        case FETCH_ALL:
            return action.payload;
        case UPDATE:
            return posts.map((post) => post.id === action.payload.id ? action.payload : post);
        case DELETE:
            return posts.filter((post)=>post.id!== action.payload)
        default:
            return posts;
    }
}