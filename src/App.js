import {Switch ,Route} from "react-router-dom"
import AddPost from "./components/AddPost";
import UpdatePost from "./components/EditPost";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path='/' component={PostList} />
       <Route exact path='/add' component={AddPost} />
       <Route exact path='/edit:id' component={UpdatePost} />


     </Switch>
    </div>
  );
}

export default App;
