import React from "react";
import classes from "./List.module.css";

const List = (props) => {
  return (
    <div className={classes.lista}>
      {props.lista.map((song) => (
        <div className={classes.element} key={song.name + song.artistName}>
          {song.type === "album" && (
            <div className={`${classes.col} ${classes["col-img"]}`}>
              <img alt={song.name} src={song.images[2]} />
            </div>
          )}
          {song.type === "track" && (
            <div className={`${classes.col} ${classes["col-sm"]}`}>
              {song.listeners}
            </div>
          )}
          |<div className={classes.col}>{song.artistName}</div>|
          <div className={classes.col}>{song.name}</div>
        </div>
      ))}
    </div>
  );
};

export default List;
