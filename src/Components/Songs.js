import React, { useEffect, useState } from "react";
import List from "./List";
import Card from "./UI/Card";

const Songs = (props) => {
  const [list, setList] = useState([]);


  useEffect(
    () =>
      props.lastfm.trackSearch({ q: props.searchQ }, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          setList(data.result);
        }
      }),
    [props.searchQ, props.lastfm]
  );

  return (
    <Card>
      <h2>Songs</h2>
      <List lista={list}></List>
    </Card>
  );
};

export default Songs;
