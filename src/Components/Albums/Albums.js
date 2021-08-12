import React, { useContext, useEffect, useState } from "react";
import List from "../List";
import Grid from "../Grid";
import Card from "../UI/Card";
import Album from "./Album";
import LastfmContext from "../../store/lastfm-context";
import Options from "../UI/Options";
import classes from "./Albums.module.css";

const AlbumsList = () => {
  const ctx = useContext(LastfmContext);
  const [list, setList] = useState([]);
  const [showList, setShowList] = useState(true);
  const [showGrid, setShowGrid] = useState(false);
  const [q, setQ] = useState("god");
  const [album, setAlbum] = useState({
    name: "Thriller",
    artistName: "Michael Jackson",
  });

  useEffect(
    () =>
      ctx.lastfm.albumSearch({ q: q }, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          setList(data.result);
        }
      }),
    [q, ctx.lastfm]
  );

  const buscarHandler = (e) => {
    e.preventDefault();
    const valor = e.target.elements[0].value;
    if (valor.trim().length > 0) {
      setQ(valor);
    }
    setShowList(true);
  };

  const showListHandler = () => {
    setShowList(true);
  };

  const toggleShowList = (albumId) => {
    setAlbum({
      name: list[albumId].name,
      artistName: list[albumId].artistName,
    });
    setShowList((prevState) => !prevState);
  };

  const toggleShowGrid = () => {
    setShowGrid((prevState) => !prevState);
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
          {!showGrid && <List onShowAlbum={toggleShowList} lista={list}></List>}
        </Card>
      )}
      {!showList && <Album album={album} onReturn={showListHandler} />}
    </React.Fragment>
  );
};

export default AlbumsList;
