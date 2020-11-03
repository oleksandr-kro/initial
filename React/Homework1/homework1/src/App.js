import logo from './logo.svg';
import './App.css';
import {data} from "./users/data";
import AllUsersComponent from "./components/all-users/all-users-component";
import {todoArr} from "./todos/data";
import AllTodos from "./components/all-todo/all-todos";

function App() {

  return (
    <div>
        {<AllTodos/>}
          {/*<AllUsersComponent/>*/}
    </div>
  );
}

export default App;
