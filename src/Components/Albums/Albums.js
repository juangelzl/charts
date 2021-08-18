import React, {  useEffect, useState } from "react";
import List from "../List";
import Grid from "../Grid";
import Card from "../UI/Card";
import Album from "./Album";
import Options from "../UI/Options";
import classes from "./Albums.module.css";

const AlbumsList = (props) => {
  const [list, setList] = useState([]);
  const [showList, setShowList] = useState(true);
  const [showGrid, setShowGrid] = useState(false);
  const [showArtist, setShowArtist] = useState(false);
  const [album, setAlbum] = useState({
    name: "Thriller",
    artistName: "Michael Jackson",
  });

  useEffect(
    () =>
    props.lastfm.albumSearch({ q: props.searchQ }, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          setList(data.result);
        }
      }),
    [ props.searchQ, props.lastfm]
  );


  const showListHandler = () => {
    setShowList(true);
  };

  const toggleShowList = (albumId) => {
    setAlbum({
      name: list[albumId].name,
      artistName: list[albumId].artistName,
    });
    setShowList((prevState) => !prevState);
    setShowArtist(false);
  };

  const showArtistHandler = (albumId) => {
    setAlbum({
      artistName: list[albumId].artistName,
    });
    setShowArtist(true);
  };

  const toggleShowGrid = () => {
    setShowGrid((prevState) => !prevState);
    setShowArtist(false);
  };

  return (
    <React.Fragment>
      {showList && (
        <Card>
          <div className={classes.header}>
            <h2 className={classes.title}>Albums</h2>
            <Options
              className={classes.options}
              active={!showGrid && "active"}
              onClick={toggleShowGrid}
            ></Options>
          </div>
          {showGrid && <Grid onShowAlbum={toggleShowList} items={list}></Grid>}
          {!showGrid && <List onShowAlbum={toggleShowList} onShowArtist={showArtistHandler} lista={list}></List>}
        </Card>
      )}
      {!showList && <Album album={album} onReturn={showListHandler} />}
    </React.Fragment>
  );
};

export default AlbumsList;
