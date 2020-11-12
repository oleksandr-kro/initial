import {Route} from "react-router";


import './App.css';
import Users from "./components/All-users/users";
import Posts from "./components/All-posts/posts";
import Comments from "./components/All-comments/comments";
import {NavLink} from "react-router-dom";



function App() {
  return (
      <>
         <div>
             <NavLink className={'navlink'} to="/" >Home</NavLink>
             <NavLink to="/users">Users</NavLink>
             <NavLink to="/posts">Posts</NavLink>
             <NavLink to="comments">Comments</NavLink>
         </div>

          <div>
              <Route exact path='/' render={()=><h1>Hello Jsonplaceholder</h1>}/>
              <Route path='/users' component={Users}/>
              <Route path='/posts' component={Posts}/>
              <Route path='/comments' component={Comments}/>
          </div>
      </>
  );
}

export default App;
