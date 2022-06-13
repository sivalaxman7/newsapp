import react from "react";
import Link from "next/link";

const Card =({source,title,id,content,description})=>{
    return(
    <div className="card" suppressHydrationWarning>
    <img src={source} alt="image not found..." style={{"width":"100%"}}/>
    <h4 style={{"color":"black"}}>{title}</h4>
    <p className="innerpara">{description}</p>
    <div className="buttons" suppressHydrationWarning>
    <Link href={`http://localhost:3000/deleteArticle/${id}`}><a className="inner-link" style={{"color":"black", "backgroundColor":"white","border":"2px solid lightgray", "margin":"10px","border-radius": "30px"}}>Delete</a></Link>
    <Link href={`blogview/${id}`}><a className="inner-link" style={{"color":"black", "backgroundColor":"white","border":"2px solid lightgray","margin":"10px","border-radius": "30px"}}>View</a></Link>
    <Link href={`blogview/updateform`}><a className="inner-link" style={{"color":"black", "backgroundColor":"white","border":"2px solid lightgray","margin":"10px","border-radius": "30px"}}>Edit</a></Link>
  </div>
  </div>)
}
export default Card