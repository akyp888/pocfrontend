import axios from "axios"
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const BlogPostCard = ({postdata}) => {
     const [modalState,setModalState] = useState({
         id:undefined,
         title:undefined,
         description:undefined
     })
     const showPost = (post) =>{

setModalState({
    show:false,
    title:undefined,
    description:undefined
})
setModalState({show:true,id:post.id,title:post.title,description:post.description})
   
    }

    const deletePost = (id) => {  
        axios.delete(`http://localhost:8080/api/posts/${id}`).then(console.log(id))
        }
    return(
        
        <div className="col-md-4" style={{maxWidth: 18 + "rem",marginBottom : 3 + "%"}}>
<div className="card" style={{maxWidth: 18 + "rem",margin:"auto"}}>
  <div className="card-body">
    <h5 className="card-title">{postdata.title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{postdata.id}</h6>
    <p className="card-text">{postdata.description}</p>
    <a href="#" className="btn btn-primary" style={{ margin : 3 + "%"}} onClick = {()=>(showPost(postdata))} >view</a>
    <a href="#" className="btn btn-danger" onClick={()=>{window.location.reload(false); return(deletePost(postdata.id))}}>delete</a>
  </div>
</div>
<Modal show={modalState.show}>
     <Modal.Header>{`id: ${modalState.id} ${modalState.title}`}</Modal.Header>
     <Modal.Body>{modalState.description}</Modal.Body>
    <Modal.Footer>{<button className="btn btn-primary" onClick={()=>(setModalState({show:false}))}>close</button>}</Modal.Footer>
    </Modal>
</div>
    )
}
export default BlogPostCard;