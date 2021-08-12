import classes from "./Grid.module.css";
import AlbumImage from "./Props/AlbumImage";

const Grid = (props) => {
  const showAlbumInfoHandler = (e) => {
    const id = e.target.id;
    props.onShowAlbum(id);
  };

  let image = "";
  return (
    <div className={classes.grid}>
      {props.items.map(
        (item, index) => (
          (image = item.images[2] ? item.images[2] : item.images[0]) &&
          image && (
            
            <AlbumImage
              key={index}
              id={index}
              onClick={showAlbumInfoHandler}
              className="col"
              alt={item.name}
              src={item.images[2]}
            />
            // <div key={index} className={` ${classes.col} ${classes["col-img"]}`}>
            //   {/* this.src = 'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png' */}
            //   <img className={classes.image} id={index} alt={item.name} src={image}  onClick={showAlbumInfoHandler}/>
            // </div>
          )
        )
      )}
    </div>
  );
};

export default Grid;
