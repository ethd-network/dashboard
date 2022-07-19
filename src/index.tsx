import React from 'react'
import ReactDOM from 'react-dom/client'


import "./css/style.sass"
import Header from "./header"


function AA() {
    return (
        <div>asdf asdf<br/>asdf asdf<br/>asdf asdf<br/>asdf asdf<br/>asdf asdf<br/>asdf asdf<br/>asdf asdf<br/>asdf
            asdf<br/>asdf asdf<br/>asdf asdf<br/>asdf asdf<br/>asdf asdf<br/>asdf asdf<br/>asdf asdf<br/>asdf
            asdf<br/>asdf asdf<br/>asdf asdf<br/>asdf asdf<br/></div>
    )
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <React.StrictMode>
        <Header/>
        <AA/>
    </React.StrictMode>
)
