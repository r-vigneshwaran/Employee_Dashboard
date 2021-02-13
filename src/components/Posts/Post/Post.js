import React from "react";
import useStyles from "./styles";
import {
    Card,
    CardActions,
    CardMedia,
    Typography,
    Button,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import userIcon from './user.png';
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/index";

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={userIcon} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.employee_name} </Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: "white" }} size="small" onClick={() => {
                    setCurrentId(post.id);
                }}
                >
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="h5" > Employee Salary : &nbsp; {post.employee_salary}
                </Typography>
            </div>
            <Typography className={classes.title} variant="body2" gutterButtom>
                Employee age : &nbsp; {post.employee_age}
            </Typography>
            
            <CardActions className={classes.actions}>

                <Button size="small" color="primary" onClick={() => {
                    dispatch(deletePost(post.id))
                }}
                >
                    <DeleteIcon fontSize="small" />
            Delete
        </Button>
        
    </CardActions>
        </Card>
    );
};

export default Post;