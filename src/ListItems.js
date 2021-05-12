import react from 'react';
import './ListItems.css';

function ListItems(props){
    const items = props.items;
    const ListItems = items.map(item =>{
        return<div className="list" key="item.key">

        <p>{item.text}</p>

        </div>
    })

    return(
        <h1>From ListItems.js</h1>

    )
}

export default ListItems;