import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import nextId from "react-id-generator";

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/index';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({id:'', employee_name: '', employee_age: '', employee_salary: '',profile_image:""});
    const post = useSelector((state) => (currentId ? state.Posts.find((post) => post.id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);
    const clear = () => {
        setCurrentId(null);
        setPostData({id:"", employee_name: '', employee_age: '', employee_salary: '',profile_image:""});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentId === null) {
            setPostData({...postData,id:111});
            dispatch(createPost(postData));
            clear();
        }else {
            dispatch(updatePost(currentId, postData));
            clear();
        }
    };
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <TextField name="employee id" variant="outlined" label="employee id" fullWidth value={postData.id} onChange={(e) => setPostData({ ...postData, id: e.target.value })} />
                <TextField name="employee name" variant="outlined" label="employee name" fullWidth value={postData.employee_name} onChange={(e) => setPostData({ ...postData, employee_name: e.target.value })} />
                <TextField name="employee age" variant="outlined" label="employee age" fullWidth value={postData.employee_age} onChange={(e) => setPostData({ ...postData, employee_age: e.target.value })} />
                <TextField name="employee salary" variant="outlined" label="employee salary" fullWidth value={postData.employee_salary} onChange={(e) => setPostData({ ...postData, employee_salary: e.target.value })} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
};

export default Form;