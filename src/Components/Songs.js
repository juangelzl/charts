import React, { useEffect, useState } from "react";
import List from "./List";
import Card from "./UI/Card";

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

  return (
    <Card>
      <h2>Songs</h2>
      <List lista={list}></List>
    </Card>
  );
};

export default Songs;
