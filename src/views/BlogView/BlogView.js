import "./BlogView.css"
import { useParams } from "react-router-dom"
import blogs from "../../BlogData"
import claps from "./image.png"
import comment from "./image copy.png"
import save from "./image copy 2.png"
import play from "./image copy 3.png"
import share from "./image copy 4.png" 

function BlogView() {
  const { id } = useParams()

  const selectedblog = blogs.find((blogobj) => blogobj.id == id)


  console.log(selectedblog)

  return (<>
    <div className="BlogView-div">
      <p className="category-badge">{selectedblog.category}</p>
      <h1 className="title">{selectedblog.title}</h1>
      <p className="subtitle">{selectedblog.subtitle}</p>

      <div className='author-info-blogview'>
        <img className='author-img' src={selectedblog.author.avtar} alt='author-img' />
        <span>{selectedblog.author.name} · <span className="follow-btn">Follow</span></span>
        <span>{selectedblog.date}</span>
      </div>
      <hr />
      <div className="img-div">
        <div>
          <img alt="img"  className="clap-img" src={claps} height={30} />
          <img alt="img"  src={comment} height={25} />
        </div>
        <div>
          <img className="img-media"  src={ save} alt="img" height={20}/>
          <img className="img-media" src={ share} alt="img"  height={20} />
          <img className="img-media" src={play} alt="img"  height={20}/>
        </div>
      </div>
      <hr />
      <div>
        <img alt="img"  className="poster-blogview" src={selectedblog.poster} />
      </div>
      <p className="blogview-discription">{selectedblog.discription}</p>
    </div>
  </>
  )

}

export default BlogView