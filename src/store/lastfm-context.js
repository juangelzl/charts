import React, { useState } from "react";

const LastFM = require("last-fm");
const lastfm = new LastFM("661acb8400b8535db0a0c1a5ca18eff3", {
  userAgent: "http://localhost:3000",
});

const LastfmContext = React.createContext({
  section: 'albums',
  onSelectSongs: () => {},
  onSelectAlbums: () => {},
  lastfm:lastfm,
});


export const LastfmContextProvider = (props) => {
// const section='albums';
  const [section, setSection] = useState('albums');

  const selectSongsHandler = () => {
    localStorage.setItem("section", "songs");
    setSection("songs");
  };
  const selectAlbumsHandler = () => {
    localStorage.setItem("section", "albums");
    setSection("albums");
  };

  return (
    <LastfmContext.Provider
      value={{
        section: section,
        onSelectSongs: selectSongsHandler,
        onSelectAlbums: selectAlbumsHandler,
        lastfm: lastfm,
      }}
    >
      {props.children}
    </LastfmContext.Provider>
  );
};

export default LastfmContext;
