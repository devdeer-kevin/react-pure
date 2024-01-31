import { createRoot } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Cart'
import { Link } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home </Link>
                <Link to="/cart">Cart</Link>
            </nav>
            <h1>My Shop</h1>
            <Routes>
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
