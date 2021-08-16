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
    const [alert, setAlert] = useState(false);
    const [reqtype,setReqtype] = useState("post")
    const [msg,setMsg] = useState("Post added")
    const notifypost = (title) => {
      setMsg(`Post ${title} added`)
      setAlert(true);
      setTimeout(() => {
      setAlert(false);
    }, 3000);
  
  }
  const notifyput = (title) => {
    setMsg(`Post ${title} updated`)
    setAlert(true);
    setTimeout(() => {
    setAlert(false);
  }, 3000);

}

     const add = async(e) => {
      e.preventDefault()
      
        if(reqtype === "post"){
       
         await axios.post("http://52.206.79.151:8080/api/posts/", JSON.stringify(formData),{headers: {'Content-Type': 'application/json',}}).then(response=>notifypost(response.data.title))
 
        e.preventDefault()
        }
        if(reqtype === "put"){
         
          await axios.put("http://52.206.79.151:8080/api/posts/", JSON.stringify(formData),{headers: {'Content-Type': 'application/json',}}).then(response=>notifyput(response.data.title))
           
     
        e.preventDefault()
            
        }
    }
          

    return(
    <div className="container" style={{width: 50 + "%",margin:"auto"}}>
        
    <form style={{marginBottom:5+"%"}} onSubmit={add} >
    {alert && <div class="alert alert-primary" role="alert">{msg}</div>}
    <div className="form-group">
    
    <input type="text" className="form-control" placeholder="ID - can be left empty to add posts" onChange={e=>(setFormData({...formData,id : e.target.value}))} value={formData.id}/>
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