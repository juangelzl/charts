import React from 'react';
import classes from './SongsHeader.module.css';

const SongsHeader = () =>{
    return <div className={classes.songHeader} >
        <h3 className={`${classes.col} ${classes['col-sm']}`}>
            Listeners
            </h3>
        <h3 className={classes.col}>
            Artist
            </h3>
        <h3 className={classes.col}>
            Title
            </h3>
    </div>
}
export default SongsHeader;
