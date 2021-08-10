import classes from './Header.module.css';
import Button from '../UI/Button';
const Header = (props)=>{
    return (
        <header>
            <Button className={classes.tab} onClick={props.onChangeSection('song')}>Search List</Button>
            <Button className={classes.tab} onClick={props.onChangeSection('album')}>Search User</Button>
        </header>
    )
};

export default Header;