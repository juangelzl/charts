import React from "react";


const Last = (props) => {

  return (
    <div>
      <ul>
        {props.lista.map((song) => (
          <li key={song.name+song.artistName}>
            <span>{song.artistName}</span> -<span>{song.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Last;
