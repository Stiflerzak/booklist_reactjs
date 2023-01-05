import React from "react";
import  ReactDOM  from "react-dom/client";
import './style.css'

const Booklist=() =>{
    return (
        <section className="booklist">
        <Book/>
        <Book/>
        <Book/>
        </section>
    )
}
const Book=() =>{
    return (
        <article className="book">
        <img src="https://images-na.ssl-images-amazon.com/images/I/91MowzF+WZL._AC_UL600_SR600,400_.jpg" alt="The Light We Carry: Overcoming in Uncertain Times"/>
        <h2>The Light We Carry: Overcoming in Uncertain Times</h2>
        <h4>Michelle Obama</h4>
        </article>
        )
}

const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist/>)