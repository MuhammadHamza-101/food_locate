import React from "react";
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
// import { SearchIcon } from '@material-ui/icons/Search';
import useStyles from './Style'


const Header = () => {
    const classes = useStyles()
    return (
        <AppBar position='static'>
            <Toolbar className={classes.Toolbar} >
                <Typography variant='h5' className={classes.title}>
                    Travel Adviser
                </Typography>
                {/* <Box display='flex'>
                    <Typography variant='h6' className={classes.title}>
                        Explore new places
                    </Typography>
                </Box> */}
                {/* <Autocomplete> */}
                <div className={classes.search}>

                    {/* <div className={classes.searchIcon}>
                            <searchIcon />
                        </div> */}
                    <InputBase placeholder='Search...' className={{ root: classes.root, input: classes.inputInput }} />

                </div>
                {/* </Autocomplete> */}
            </Toolbar>
        </AppBar>
    )
}

export default Header;