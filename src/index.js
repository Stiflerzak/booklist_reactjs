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
        <Image/>
        <Title/>
        <Author/>
        </article>
        )
}
const Image=() => <img src="https://images-na.ssl-images-amazon.com/images/I/91MowzF+WZL._AC_UL600_SR600,400_.jpg" alt="The Light We Carry: Overcoming in Uncertain Times"/>
const Title=() => <h2>The Light We Carry: Overcoming in Uncertain Times</h2>
// Author component 
const Author=() => {
    // inlinestyling using an object
    const inlineHeadingStyles={
    color:'#617d98',
    fontSize:'0.75rem',
    marginTop:"0.5rem" }
   return <h4 style={inlineHeadingStyles}>Michelle Obama</h4>
}


const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist/>)