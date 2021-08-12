import React, { useContext, useEffect, useState } from "react";
import LastfmContext from "../store/lastfm-context";
import Card from "./UI/Card";
import Item from "./UI/Item";
import ShortList from "./ShortList";
import classes from "./Album.module.css";
import Button from "./UI/Button";

const Album = (props) => {
  const ctx = useContext(LastfmContext);
  const [album, setAlbum] = useState({});

  useEffect(
    () =>
      ctx.lastfm.albumInfo(
        { name: props.album.name, artistName: props.album.artistName },
        (err, data) => {
          if (err) {
            console.error(err);
          } else {
            const { name, artistName, tracks, summary, images } = data;
            setAlbum({
              name: name,
              artistName: artistName,
              tracks: tracks,
              summary: summary,
              images: images,
            });
          }
        }
      ),
    [ctx.lastfm, props.album.artistName, props.album.name]
  );
  const returnHandler=()=>{
    props.onReturn()
  }

  return (
    <div>
      <Card>
        <h2>Album</h2>
        <Button onClick={returnHandler}>Return</Button>
        {album.tracks && (
          <Item>
            <div className={classes.header}>
              <img
                className={classes.image}
                alt={album.name}
                src={album.images[3]}
              />

              <div className={classes.albumTitles}>
                <div className={classes.title}>{album.name}</div>
                <div className={classes.artist}>{album.artistName}</div>
              </div>
            </div>
            <div>{album.listeners}</div>
            {/* <ul>
            {album.tracks.map((track,index) => (
              <li key={index}>{track.name}</li>
              ))}
            </ul> */}

            <ShortList list={album.tracks} />
            <div className={classes.summary}>{album.summary}</div>
          </Item>
        )}
      </Card>
    </div>
  );
};

export default Album;
