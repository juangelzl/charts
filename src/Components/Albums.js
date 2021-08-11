import React, { useContext, useEffect, useState } from "react";
import List from "./List";
import InputForm from "./UI/InputForm";
import Card from "./UI/Card";
import Album from "./Album";
import LastfmContext from "../store/lastfm-context";

const AlbumsList = () => {
  const ctx = useContext(LastfmContext);
  const [list, setList] = useState([]);
  const [showList, setShowList] = useState(true);
  const [q, setQ] = useState("god");
  const [album, setAlbum] = useState({name:"Thriller",artistName:"Michael Jackson"});

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
  };

  const toggleShowList = (albumId)=>{
    setAlbum({name:list[albumId].name,artistName:list[albumId].artistName})
    setShowList(prevState=>!prevState);
  }

  return (
    <Card>
      <InputForm onSubmit={buscarHandler}></InputForm>
      {showList && (
        <Card>
          <h2>Album</h2>
          <List onShowAlbum={toggleShowList} lista={list}></List>
        </Card>
      )}
      {!showList && <Album  album={album}/>}
    </Card>
  );
};

export default AlbumsList;
