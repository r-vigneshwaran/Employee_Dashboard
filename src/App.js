
import './styles.js';
import { useDispatch,useSelector } from "react-redux";
import { getPosts } from "./actions/index";
import {useEffect,useState} from 'react';
import {Grow,Grid,Container} from "@material-ui/core";
import useStyles from "./styles";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import Navbar from './components/Navbar/Navbar.js';

function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch =useDispatch();
  useEffect(() => {
    dispatch(getPosts());
}, [dispatch]);
  const posts = useSelector((state)=>state.Posts);
  const classes=useStyles();
  return (
    <div>
    <Navbar/>
    <Grow in>
        <Container>
            <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                    <Posts setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
            </Grid>
        </Container>
    </Grow>
</div>
  );
}

export default App;
