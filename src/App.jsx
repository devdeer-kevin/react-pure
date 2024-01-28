import { createRoot } from 'react-dom'
import Item from './Item'

const App = () => {
    return (
        <>
            <h1>Cart</h1>
            <Item title="MacBook Pro 14" description="Worlds most expensive notebook." />
            <Item title="MacBook Pro 16" description="Worlds most heaviest notebook." />
            <Item title="MacBook Pro 18" description="Worlds biggest notebook." />
        </>
    )
}

export default App

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
