import classes from "./AlbumImage.module.css";
const AlbumImage = (props) => {
  return (
    <div className={classes[props.className]}>
      <img
      
        id={props.id}
        className={classes.image}
        alt={props.alt}
        src={props.src}
        onClick={props.onClick}
      />
    </div>
  );
};
export default AlbumImage;
