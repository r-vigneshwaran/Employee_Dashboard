import React from 'react'
import Post from "./Post/Post.js"
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";



const Posts = ({setCurrentId}) => {
    const posts = useSelector((state)=>state.Posts);
    const classes = useStyles();
    return (
        !posts.length ? <CircularProgress styles={{display:'flex',justifyContent:'center'}}/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    posts.map((post) => (
                        <Grid key={post.id} xs={12} sm={6} item>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))
                }
            </Grid>
       )
    )
}

export default Posts
