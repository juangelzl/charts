
import './App.css';
import Charts from './Components/Charts';


const LastFM = require("last-fm");
const lastfm = new LastFM("661acb8400b8535db0a0c1a5ca18eff3", {
  userAgent: "http://localhost:3000",
});
function App() {
  return (
    <div className="App">
      <Charts lastfm={lastfm}/>
    </div>
  );
}

export default App;
