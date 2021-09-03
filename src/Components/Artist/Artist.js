import { useContext, useEffect, useState } from "react";
import LastfmContext from "../../store/lastfm-context";
import Card from "../UI/Card";
import Item from "../UI/Item";
import classes from "../Artist/Artist.module.css";

const Artist = (props) => {
  const ctx = useContext(LastfmContext);
  const [artist, setArtist] = useState({});

  useEffect(
    () =>
      ctx.lastfm.artistInfo({ name: ctx.artist }, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log(data);
          setArtist(data);
        }
      }),[ctx.artist,ctx.lastfm]
    
  );

  return (
    <Card>
      <h2>Artist</h2>
      <Item>
        <div className={classes.header}>
          {artist.images && (
            <img
              className={classes.image}
              alt={artist.name}
              src={artist.images[1]}
            />
          )}

          <div className={classes.titles}>
            {artist.name && <div className={classes.title}>{artist.name}</div>}
            {artist.listeners && (
              <div className={classes.artist}>
                Listeners: {artist.listeners.toLocaleString()}
              </div>
            )}
          </div>
        </div>
        {/* <ul>
            {album.tracks.map((track,index) => (
              <li key={index}>{track.name}</li>
              ))}
            </ul> */}
        <div className={classes.summary}>{artist.summary}</div>
      </Item>
    </Card>
  );
};
export default Artist;
