const BlogPostCard = ({postdata}) => {

    return(
        <div className="col-md-4 col-sm-4" style={{maxWidth: 18 + "rem",marginBottom : 3 + "%"}}>
<div className="card" style={{maxWidth: 18 + "rem",margin:"auto"}}>
  <div className="card-body">
    <h5 className="card-title">{postdata.title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{postdata.id}</h6>
    <p className="card-text">{postdata.description}</p>
    <a href="#" className="btn btn-primary" style={{ margin : 3 + "%"}} >view</a>
    <a href="#" className="btn btn-danger">delete</a>
  </div>
</div>
</div>
    )
}
export default BlogPostCard;