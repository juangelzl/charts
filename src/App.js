import React,{ useContext} from "react";
import classes from './App.module.css';
import Albums from "./Components/Albums";
import Songs from "./Components/Songs";
import Button from './Components/UI/Button';
import LastfmContext from "./store/lastfm-context";


function App() {

  const ctx = useContext(LastfmContext);

  return (
    <React.Fragment>
    <header>
        <Button className={classes.tab} onClick={ctx.onSelectSongs}>Songs</Button>
        <Button className={classes.tab} onClick={ctx.onSelectAlbums}>Albums</Button>
    </header>
      <div className={classes.content}>
        {ctx.section==='songs'&&
          <Songs lastfm={ctx.lastfm} />
        }
        {ctx.section==='albums'&&
          <Albums />
        }
      </div>
    </React.Fragment>
  );
}

export default App;
