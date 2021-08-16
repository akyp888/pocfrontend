import AddPostForm from './components/AddPostForm';
import BlogPostCards from './components/BlogPostCards';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App" style={{backgroundColor:"#E7E9EB"}}>
      <NavBar />
      <div className="container" style={{width: 50 + "%",margin:"auto"}} >
     <nav class="navbar navbar navbar-dark bg-primary navbar-expand-lg " style={{borderRadius:5+"px",marginBottom:5+"%"}}>
       <div className = "container">
  <a class="navbar-brand" href="#">Add Posts</a>
  </div>
  </nav>
      </div>

      

     <AddPostForm />
     <div className="container" style={{width: 50 + "%",margin:"auto"}} >
     <nav class="navbar navbar navbar-dark bg-primary navbar-expand-lg " style={{borderRadius:5+"px",marginBottom:5+"%"}}>
       <div className = "container">
  <a class="navbar-brand" href="#">All Posts</a>
  </div>

  </nav>
      </div>
     <BlogPostCards />
    </div>
  );
}

export default App;
