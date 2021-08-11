import React from "react";
import classes from "./List.module.css";

const ShortList = (props) => {
  return (
    <div className={classes.lista}>
      {props.list.map((piece, index) => (
        <div className={`${classes.element} ${classes.row}` } key={index}>
            {index+1}.- {piece.name}
        </div>
      ))}
    </div>
  );
};

export default ShortList;
