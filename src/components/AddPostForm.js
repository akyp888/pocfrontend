import axios from "axios";
import { useState } from "react";






const AddPostForm = () => {
    const [formData, setFormData] = useState(
        {
            id:undefined,
            title:undefined,
            description:undefined
        }
    )

    const [reqtype,setReqtype] = useState("post")

     const add = async(e) => {
        if(reqtype === "post"){
        console.log( JSON.stringify(formData))
        await axios.post("http://52.206.79.151:8080/api/posts/", JSON.stringify(formData),{headers: {'Content-Type': 'application/json',}}).then(response => {console.log(response)})
        e.preventDefault()
      
        }
        if(reqtype === "put"){
            console.log( JSON.stringify(formData))
           await axios.put("http://52.206.79.151:8080/api/posts/", JSON.stringify(formData),{headers: {'Content-Type': 'application/json',}}).then(response => console.log(response))
        e.preventDefault()
            
        }
    }
          

    return(
    <div className="container" style={{width: 50 + "%",margin:"auto"}}>
        
    <form style={{marginBottom:5+"%"}} onSubmit={add} >
    <div className="form-group">
    
    <input type="text" className="form-control" placeholder="ID" onChange={e=>(setFormData({...formData,id : e.target.value}))} value={formData.id}/>
  </div>
  <br/>
  <div className="form-group">
    
    <input type="text" className="form-control" placeholder="Title" onChange={e=>(setFormData({...formData,title : e.target.value}))} value={formData.title}/>
  </div>
  <br />
  <div className="form-group">
    
    <textarea type="text" className="form-control" placeholder="Description" onChange={e=>(setFormData({...formData,description : e.target.value}))} value={formData.description}/>
  </div>
 <br />
  <button type="submit" className="btn btn-primary" onClick={e=>(setReqtype("post"))} style={{ margin : 3 + "%"}}>Add Post</button> 
  <button type="submit" className="btn btn-success" onClick={e=>(setReqtype("put"))}>Update Post</button>
</form>
</div>
    )
}


export default AddPostForm;