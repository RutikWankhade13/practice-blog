import React from 'react'
import "./BlogCard.css"
import { Link } from 'react-router-dom'
function BlogCard({ id, title, subtitle, discription, author, date, category, poster }) {
  return (
    
      <Link to={`/blog/${id}`} className='blog-card'>
        <div>
          <div className='author-info'>
            <img className='author-img' src={author.avtar} alt='author-img' />
            <span>{author.name}</span>
            <span>{date}</span>
          </div>
          <div>
            <h1>{title}</h1>
            <h4>{subtitle}</h4>
            <span>{discription.substring(0, 150)}.......</span>
          </div>
          {category.map((category, i) => {
            return <span key={i} className="category-badge">{category}</span>
          })}
        </div>
        <div>
          <img className='poster' alt='poster' src={poster} />
        </div>
      </Link>
  
  )
}

export default BlogCard