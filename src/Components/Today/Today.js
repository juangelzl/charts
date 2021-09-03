import React, { useEffect, useState } from "react";
import List from "../List";
import classes from "./Today.module.css";
import Card from "../UI/Card";

const AlbumsList = (props) => {
  const [list, setList] = useState([]);

  const showArtistHandler = (albumId) => {
    console.log(list[albumId].artistName)
  };

  useEffect(
    () =>
      props.lastfm.artistTopAlbums({ name: props.searchQ }, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          setList(data.result);
          console.log(data.result);
        }
      }),
    [props.searchQ, props.lastfm]
  );

  return (
    <React.Fragment>
      <Card>
        <div className={classes.header}>
          <h2 className={classes.title}>Top Albums</h2>
        </div>
        <List
          onShowArtist={showArtistHandler}
          lista={list}
        ></List>
        
      </Card>
    </React.Fragment>
  );
};

export default AlbumsList;
