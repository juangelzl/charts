import React, { useState } from "react";

const LastFM = require("last-fm");
const lastfm = new LastFM("661acb8400b8535db0a0c1a5ca18eff3", {
  userAgent: "http://localhost:3000",
});

const LastfmContext = React.createContext({
  section: "albums",
  onSelectSongs: () => {},
  onSelectAlbums: () => {},
  onSelectToday: () => {},
  onSelectArtist:()=>{},
  onSearch:()=>{},
  artist: 'Maluma',
  lastfm: lastfm,
  searchQ: "kendrick",
});

export const LastfmContextProvider = (props) => {
  // const section='albums';
  const [artist, setArtist] = useState("Nirvana");
  const [searchQ, setSearchQ] = useState("god");
  const [section, setSection] = useState("albums");

  const selectSongsHandler = () => {
    localStorage.setItem("section", "songs");
    setSection("songs");
  };
  
  const selectAlbumsHandler = () => {
    localStorage.setItem("section", "albums");
    setSection("albums");
  };
  const selectTodayHandler = () => {
    localStorage.setItem("section", "today");
    setSection("today");
  };

  const selectArtistHandler = (artist) => {
    console.log(artist)
    localStorage.setItem("section", "artist");
    localStorage.setItem("artist", artist);
    setSection("artist");
    setArtist(artist)
  };

  const searchHandler=(q)=>{
    console.log(q)
    setSearchQ(q)
  }

  return (
    <LastfmContext.Provider
      value={{
        section: section,
        onSelectSongs: selectSongsHandler,
        onSelectAlbums: selectAlbumsHandler,
        onSelectToday: selectTodayHandler,
        onSelectArtist: selectArtistHandler,
        onSearch:searchHandler,
        artist: artist,
        lastfm: lastfm,
        searchQ: searchQ,
      }}
    >
      {props.children}
    </LastfmContext.Provider>
  );
};

export default LastfmContext;
