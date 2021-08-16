import BlogPostCard from "./BlogPostCard"
import axios from 'axios';
import { useEffect } from "react";
import { connect } from "react-redux";
import store from "../redux/store";
import { getallposts } from "../redux/actions";


const BlogPostCards = ({posts}) => {
    
    useEffect(()=>{
        store.dispatch(getallposts())
    })
    return(
            <div className="container" style={{width:50+"%",margin:"auto"}}>
                <div className="row" >
                        {posts.map(post => <BlogPostCard postdata = {post}/>)}
                </div>
            </div>
    )
}
const mapstatetoprops=state=>{
    return{
      posts:state.reducer
    }
  }
  
  export default connect(mapstatetoprops)(BlogPostCards);