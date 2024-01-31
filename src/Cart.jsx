import Item from './Item'

const Cart = () => {
    return (
        <>
            <h1>Cart</h1>
            <h3>Items</h3>
            <Item title="MacBook Pro 14" description="Worlds most expensive notebook." />
            <Item title="MacBook Pro 16" description="Worlds most heaviest notebook." />
            <Item title="MacBook Pro 18" description="Worlds biggest notebook." />
        </>
    )
}

export default Cart
