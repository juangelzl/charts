import classes from "./InputForm.module.css";
import Button from "./Button";
import { useState } from "react";
const InputForm = (props) => {
  const [search,setSearch]=useState('');

  const searchInputHanlder = (e)=>{
    setSearch(e.target.value)
  }

  const submitHandler=()=>{
    props.onSubmit(search);
  }
  return (
    <div className={`${classes.form}`}>
      <input onChange={searchInputHanlder} value={search} className={classes.input} />
      <Button onClick={submitHandler}type='submit'>Search</Button>
    </div>
  );
};

export default InputForm;
