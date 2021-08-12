import React from "react";
import classes from "./List.module.css";
import AlbumImage from "./Props/AlbumImage";
const List = (props) => {
  const showAlbumInfoHandler = (e) => {
    const id = e.target.id;
    props.onShowAlbum(id);
  };
  let image = "";

  return (
    <div className={classes.lista}>
      {props.lista.map((item, index) => (
        <div className={classes.element} key={index}>
          {item.type === "album" &&
            ((image = item.images[2] ? item.images[2] : item.images[0]) &&
            image && (
              <AlbumImage
                id={index}
                onClick={showAlbumInfoHandler}
                className="col-img"
                alt={item.name}
                src={item.images[2]}
              />
            ))}
          {item.type === "track" && (
            <div className={`${classes.col} ${classes["col-sm"]}`}>
              {item.listeners}
            </div>
          )}
          <div className={classes.col}>{item.artistName}</div>
          {/* <input value={index} onClick={showAlbumInfoHandler}> */}
          <div
            id={index}
            className={classes.col}
            onClick={showAlbumInfoHandler}
          >
            {item.name}
          </div>
          {/* </input> */}
        </div>
      ))}
    </div>
  );
};

export default List;
