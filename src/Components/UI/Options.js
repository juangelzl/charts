import classes from "./Options.module.css";
import chartIcon from "../../images/icon-empty.png";
const Options = (props) => {
  return (
    <div className={props.className}>
      <button onClick={props.onClick} className={`${classes.optionBtn} ${classes[props.active]}`}>
        <img alt="Toggle Grid" src={chartIcon} className={classes.btnImage} />
        {/* button */}
      </button>
    </div>
  );
};

export default Options;
