import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

const anotherElement =(
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
    'a',
    {href:'https://google.com', target:'_blank'},
    'click me to visit google'
)


ReactDom.createRoot(document.getElementById('root')).render(

<App />
)
