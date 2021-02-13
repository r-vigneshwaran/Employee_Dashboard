import * as api from "../api";
import { CREATE, FETCH_ALL, UPDATE, DELETE  } from "../constants/actionTypes";
// Actions creators;

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.Get();
        dispatch({type:FETCH_ALL , payload:data.data});
    } catch (error) {
        console.log(error.message)
    }
}
export const createPost = (post) =>async (dispatch)=> {
    try {
        dispatch({ type: CREATE , payload: post});
    } catch (error) {
        console.log(error);
    }
}
export const updatePost = (id,updatedPost) =>async (dispatch)=> {
    try {
        dispatch({ type: UPDATE , payload: updatedPost });
    } catch (error) {
        console.log(error)
    }
}
export const deletePost = (id) =>async (dispatch)=> {
    try {
        await api.Delete(id);
        dispatch({ type: DELETE , payload: id });
    } catch (error) {
        console.log(error);
    }
}
export const getSinglePost = (id) =>async (dispatch)=> {
    try {
        const {data}= await api.GetOne(id)
        dispatch({ type: UPDATE , payload: data });
    } catch (error) {
        console.log(error);
    }
}