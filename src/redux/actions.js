import axios from "axios"

export const getallposts = () => {
    return (dispatch) =>{ 
    return axios.get("http://localhost:8080/api/posts/").then(
        response => dispatch({type:"GET_ALL_POSTS",payload:response.data})
    )
}
}

export const addposts = posts =>({
    type:"ADD_POSTS",
    posts
})