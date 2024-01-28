import React from 'react'
import { createRoot } from 'react-dom'

const App = () => {
    return React.createElement('div', {}, React.createElement('h1', {}, 'Hello World'))
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(React.createElement(App))
