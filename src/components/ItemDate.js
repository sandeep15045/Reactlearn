import './ItemDate.css';

function ItemDate(props) {

    const day=props.day;
    const month=10;
    const year=10;



    return (<div className='mfg-date'>
        <span>{day}/ </span>
        <span>{month}/ </span>
        <span>{year}</span>
    </div>);
}

export default ItemDate;