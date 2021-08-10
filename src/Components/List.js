import React from "react";
import classes from './List.module.css';

const List = (props) => {

  return (
    <div className={classes.lista}>
      <div>
        {props.lista.map((song) => (
          <div key={song.name+song.artistName}>
            <div className={` ${classes.col} ${classes['col-sm']}`}>{song.listeners}</div>
         |   
            <div className={classes.col}>{song.artistName}</div>
          |  
            <div className={classes.col}>{song.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
