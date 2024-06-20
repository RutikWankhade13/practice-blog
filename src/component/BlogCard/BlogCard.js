import "./BlogCard.css"
import { Link } from "react-router-dom"
function BlogCard ({id,title, content,author,date,categories}) {
  return (
   <Link to={`/blog/${id}`} className="blog-card">
    <h1 className="blog-title">{title}</h1>
    <p className="Blog-content-preview">{content.substring(0,130)}......</p>
    <div className="author-card">
      <img src={author.avtar} alt="author" className="author-avtar"/>
      <span className="author-name">{author.name}</span>
      <span className="blog-date">{date}</span>
    </div>
{categories.map((category , i)=>{
return <span key={i} className="category-badge">{category}</span>
})}
   </Link>
  )
}

export default BlogCard