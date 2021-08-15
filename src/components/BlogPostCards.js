import BlogPostCard from "./BlogPostCard"
import axios from 'axios';
import { useState } from "react";

const getallposts = axios.get("http://localhost:8080/api/posts/")

const BlogPostCards = () => {
    const [posts,setPosts] = useState([]);
    getallposts.then(response => setPosts(response.data))
    return(
            <div className="container" style={{width:50+"%",margin:"auto"}}>
                <div className="row" >
                        {posts.map(post => <BlogPostCard postdata = {post}/>)}
                </div>
            </div>
    )
}
export default BlogPostCards;