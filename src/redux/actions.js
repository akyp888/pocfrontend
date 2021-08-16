import axios from "axios"

export const getallposts = () => {
    return (dispatch) =>{ 
    return axios.get("http://localhost:8080/api/posts/").then(
        response => dispatch({type:"GET_ALL_POSTS",payload:response.data})
    )
}
}
export const addpost = (post) => {
    console.log(post)
    return (dispatch) =>{ 
    return axios.post("http://localhost:8080/api/posts/", JSON.stringify(post),{headers: {'Content-Type': 'application/json',}})
                //.then( response => dispatch({type:"ADD_POST",payload:response.data}))
}
}