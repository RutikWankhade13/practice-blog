import "./Home.css"
import blogs from "../../data"
import BlogCard from  "../../component/BlogCard/BlogCard"

function Home() {
    return (
        <>
        <div className="blogs-container">
            {
                blogs.map((blogobj, i) => {
                    const {
                        id, 
                        title,
                        content,
                        author,
                        date,
                        categories } = blogobj

                    return (
                        <BlogCard
                        key = {i}
                        id={id}
                        title={title}
                        content={content}
                        author={author}
                        date={date}
                        categories={categories}
                        />
                    )

                })
            }
            </div>
        </>
    )
}

export default Home