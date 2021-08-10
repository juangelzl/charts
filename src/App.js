import React,{ useState } from "react";
import Header from "./Components/Header/Header";
import SearchList from "./Components/SearchList";
import classes from './App.module.css';
import AlbumsList from "./Components/AlbumsList";

const LastFM = require("last-fm");
const lastfm = new LastFM("661acb8400b8535db0a0c1a5ca18eff3", {
  userAgent: "http://localhost:3000",
});
function App() {
  const [section, setSection] = useState("song");

  const onChangeSection = (section) => {
    setSection(section);
  };

  return (
    <React.Fragment>
      <Header onChangeSection={onChangeSection}></Header>
      <div className={classes.content}>
        {section==='song'&&
          <SearchList lastfm={lastfm} />
        }
        {section==='album'&&
          <AlbumsList lastfm={lastfm} />
        }
      </div>
    </React.Fragment>
  );
}

export default App;
