import classes from "./InputForm.module.css";
import Button from "./Button";
const InputForm = (props) => {
  return (
    <form  className={`${classes.form}`} onSubmit={props.onSubmit}>
      <input  className={classes.input}/>
      <Button >
        Search
      </Button>
    </form>
  );
};

export default InputForm;
