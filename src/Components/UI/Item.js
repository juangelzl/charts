import React from 'react';
import Card from './Card';
const Item = (props)=>{
    return (
        <Card className='white'>
            {props.children}
        </Card>
    )
}

export default Item;