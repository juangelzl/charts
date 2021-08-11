import React from "react";
import classes from "./List.module.css";

const List = (props) => {
  const showAlbumInfoHandler = (e) => {
    const id=e.target.id;

    props.onShowAlbum(id);
  };
  return (
    <div className={classes.lista}>
      {props.lista.map((piece, index) => (
        <div className={classes.element} key={index}>
          {piece.type === "album" && (
            <div className={`${classes.col} ${classes["col-img"]}`}>
              <img alt={piece.name} src={piece.images[2]} />
            </div>
          )}
          {piece.type === "track" && (
            <div className={`${classes.col} ${classes["col-sm"]}`}>
              {piece.listeners}
            </div>
          )}
          <div className={classes.col}>{piece.artistName}</div>
          {/* <input value={index} onClick={showAlbumInfoHandler}> */}
            <div id={index} className={classes.col} onClick={showAlbumInfoHandler}>
              {piece.name}
            </div>
          {/* </input> */}
        </div>
      ))}
    </div>
  );
};

export default List;
