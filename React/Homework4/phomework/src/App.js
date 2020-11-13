import {Redirect, Route, Switch} from "react-router";
import React from  "react"
import {NavLink} from "react-router-dom";


import './App.css';
import Users from "./components/All-users/users";
import Posts from "./components/All-posts/posts";
import Comments from "./components/All-comments/comments";
import User from "./components/All-users/user";
import {Error} from "./components/Error/error";
import './App.css'



function App() {
  return (
      <>
         <div className={'linkWrapper'}>
             <div><NavLink to="/" >Home</NavLink></div>
             <div><NavLink to="/users">Users</NavLink></div>
             <div><NavLink to={{
                 pathname:"/posts",
                 search:'?a=1&b=2',
                 hash: 'hash'
             }}
             >Posts</NavLink></div>
             <div><NavLink to="comments">Comments</NavLink></div>
         </div>

          <div>
              <Switch>
              <Route path='/users/:id' component={User}/>
              <Route path='/users' component={Users}/>
              <Route path='/comments' component={Comments}/>
              <Route path='/posts' component={Posts}/>
              <Route exact path='/' render={()=><h1>Hello Jsonplaceholder</h1>}/>
              <Redirect to={'/'}/>
              <Route render={()=><Error/>}/>
              </Switch>
          </div>
      </>
  );
}

export default App;
