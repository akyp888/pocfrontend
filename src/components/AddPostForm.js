import axios from "axios";
import { useState } from "react";






const AddPostForm = () => {
    const [formData, setFormData] = useState(
        {
            title:undefined,
            description:undefined
        }
    )
    const add = (e) => {

        console.log( JSON.stringify(formData))
        axios.post("http://localhost:8080/api/posts/", JSON.stringify(formData),{headers: {'Content-Type': 'application/json',}}).then(res => console.log(res))
        //e.preventDefault()
    }
          

    return(
    <div className="container" style={{width: 50 + "%",margin:"auto"}}>
        
    <form style={{marginBottom:5+"%"}} onSubmit={add} >
  <div className="form-group">
    
    <input type="text" className="form-control" placeholder="Title" onChange={e=>(setFormData({...formData,title : e.target.value}))} value={formData.title}/>
  </div>
  <br />
  <div className="form-group">
    
    <textarea type="text" className="form-control" placeholder="Description" onChange={e=>(setFormData({...formData,description : e.target.value}))} value={formData.description}/>
  </div>
 <br />
  <button type="submit" className="btn btn-primary" >Add Post</button>
</form>
</div>
    )
}


export default AddPostForm;