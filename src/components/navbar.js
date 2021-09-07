import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

    button: {
        color: 'white',
        fontFamily: "Roboto",
        fontSize: 16,
        // backgroundColor: "green",
        "&:hover": {
            backgroundColor: "red"
        }
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="center" style={{ background: '#1b1b1b' }}>
                <Toolbar>


                    <a href="https://www.youtube.com/embed/channel/UC_bD4QllKWtnZnqElOjdBfQ">
                        <Button className={classes.button} color="inherit">HOME</Button>
                    </a>
                    <Link to="/buildE/Contact">
                        <Button className={classes.button} color="inherit">BOARDS</Button>
                    </Link>
                    <a href="https://www.youtube.com/embed/channel/UC_bD4QllKWtnZnqElOjdBfQ">
                        <Button className={classes.button} color="inherit">VIDEOS</Button>
                    </a>
                    <a href="https://www.youtube.com/embed/channel/UC_bD4QllKWtnZnqElOjdBfQ">
                        <Button className={classes.button} color="inherit">CONTACT</Button>
                    </a><a href="https://www.youtube.com/embed/channel/UC_bD4QllKWtnZnqElOjdBfQ">
                        <Button className={classes.button} color="inherit">ABOUT</Button>
                    </a>
                    <Link to="/buildE/" className={classes.title}>
                        <img src={Logo}

                            width="120px"
                            height="100%"
                            className="cd-inline-block align-top"
                            alt="" />
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
