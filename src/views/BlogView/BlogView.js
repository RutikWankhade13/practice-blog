import "./BlogView.css"
import { useParams } from "react-router-dom"
import blogs from "../../data"

function BlogView() {
    const {id} = useParams()

    const selectedblog = blogs.find((blogobj) => blogobj.id == id)
       

  console.log(selectedblog)

 return (<>
  <div> 
    <h1>{selectedblog.title}</h1>
    <p>
      {selectedblog.author.name} | {selectedblog.date}
    </p>
    <p>
      <img src={selectedblog.author.avtar} height={"40px"}/>
      {selectedblog.content}
    </p>
  </div>
  </>
 )
  
}

export default BlogView