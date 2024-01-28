const Item = (props) => {
    return (
        <div className="item">
            <div className="item-name">{props.name}</div>
            <div className="item-price">{props.price}</div>
        </div>
    )
}
export default Item
