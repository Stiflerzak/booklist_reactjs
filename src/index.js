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
    const title='The Light We Carry: Overcoming in Uncertain Times'
    const author='Michelle Obama'
    return (
        <article className="book">
        <img src="https://images-na.ssl-images-amazon.com/images/I/91MowzF+WZL._AC_UL600_SR600,400_.jpg" alt="The Light We Carry: Overcoming in Uncertain Times"/>
        <h2>{title.toUpperCase()}</h2>
        <h4>{author}</h4>
        <p>{10 + 6}</p>
        </article>
        );
}

const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist/>)