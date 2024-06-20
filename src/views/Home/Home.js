import BlogCard from "../../component/BlogCard/BlogCard"
import blog from "../../BlogData"
import "./Home.css"

function Home() {
    return (
        <>
            {
                blog.map((blogobj, i) => {
                    const {
                        id, 
                        title,
                        subtitle,
                        discription,
                        author,
                        date,
                        category,
                        poster
                    } = blogobj
                    return (
                        <BlogCard
                            key={i}
                            id={id}
                            title={title}
                            subtitle={subtitle}
                            discription={discription}
                            author={author}
                            date={date}
                            category={category}
                            poster={poster}
                        />
                    )
                })
            }

        </>
    )
}

export default Home