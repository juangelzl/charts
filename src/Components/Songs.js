import React, { useEffect, useState } from "react";
import List from "./List";
import InputForm from "./UI/InputForm";
import Card from './UI/Card'

const Songs = (props) => {
  const [list, setList] = useState([]);

  const [q, setQ] = useState("god");

  useEffect(
    () =>
      props.lastfm.trackSearch({ q: q }, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          setList(data.result);
        }
      }),
    [q, props.lastfm]
  );

  const buscarHandler = (e) => {
    e.preventDefault();
    const valor = e.target.elements[0].value;
    console.log(valor);
    if (valor.trim().length > 0) {
      setQ(valor);
    }
  };

  return (
    <Card>
      <InputForm onSubmit={buscarHandler}></InputForm>
      <Card >
        <h2>Songs</h2>
        <List lista={list}></List>
      </Card>
    </Card>
  );
};

export default Songs
;
