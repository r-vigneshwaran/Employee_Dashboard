import axios from "axios";

const url='https://dummy.restapiexample.com/api/v1';

export const Create=(newPost)=> axios.post(`${url}/create`,newPost);
export const Get=()=> axios.get(`${url}/employees`);
export const GetOne=(id)=> axios.get(`${url}/employees/${id}`);
export const Update=(id,updatedPost)=> axios.put(`${url}/update/${id}`,updatedPost);
export const Delete =(id)=> axios.delete(`${url}/delete/${id}`);