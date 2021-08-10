import React, { useEffect, useState } from "react";
import Last from "./Last";


const Charts = (props) => {

  const [list, setList] = useState([]);

  const [q,setQ]=useState('god');

  useEffect(()=>props.lastfm.trackSearch({ q: q }, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
      setList(data.result);
    }
  }),[q,props.lastfm]);


  const buscarHandler=(e)=>{
    e.preventDefault()
    const valor =e.target.elements[0].value;
    console.log(valor)
    if(valor.trim().length>0){
      setQ(valor)
    }
  }

  return (
    <div>
      <form onSubmit={buscarHandler}>
        <label>song: </label>
        <input />
        <button type='submit'>Buscar</button>
      </form>
      <div>Charts</div>
      <Last lista={list}></Last>
    </div>
  );
};

export default Charts;
