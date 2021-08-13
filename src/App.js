import React, { useContext } from "react";
import classes from "./App.module.css";
import Albums from "./Components/Albums/Albums";
import Songs from "./Components/Songs";
import Button from "./Components/UI/Button";
import LastfmContext from "./store/lastfm-context";
import SearchBar from "./Components/SearchBar/SearchBar";
import Card from "./Components/UI/Card";

function App() {
  const ctx = useContext(LastfmContext);

  return (
    <React.Fragment>
      <header>
        <Button className={classes.tab} onClick={ctx.onSelectSongs}>
          Songs
        </Button>
        <Button className={classes.tab} onClick={ctx.onSelectAlbums}>
          Albums
        </Button>
      </header>
      <div className={classes.content}>
        <Card>
          <SearchBar onSearch={ctx.onSearch} />
          {ctx.section === "songs" && <Songs lastfm={ctx.lastfm} />}
          {ctx.section === "albums" && <Albums lastfm={ctx.lastfm}  searchQ={ctx.searchQ}/>}
        </Card>
      </div>
    </React.Fragment>
  );
}

export default App;
