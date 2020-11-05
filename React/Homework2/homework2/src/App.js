
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllUsers from "./components/users/allUsers";
import AllPosts from "./components/posts/all-posts";
import AllComments from "./components/comments/all-comments";
function App() {

  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/users">Users</Link>
              </li> <li>
                <Link to="/posts">Posts</Link>
              </li> <li>
                <Link to="/Comments">Comments</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>

            <Route path="/users">
              <AllUsers />
            </Route>

            <Route path="/posts">
              <AllPosts />
           </Route>
            <Route path="/comments">
              <AllComments />
            </Route>

          </Switch>
        </div>
      </Router>
  );


}

export default App;
