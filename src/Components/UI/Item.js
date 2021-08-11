import React from 'react';
import Card from './Card';
import classes from './Item.module.css'
const Item = (props)=>{
    return (
        <Card className='white'>
            {props.children}
        </Card>
    )
}

export default Item;