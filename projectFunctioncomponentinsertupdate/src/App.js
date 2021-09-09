import Navbar from "./component/Navbar";
import Post from "./component/Post";
import Table from "./component/Table";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DemoApi from "./component/DemoApi";

function App(props) {
  return (
    <>
      {/* <Router>
     <Navbar/>
       <Switch>
       <Route exact path="/">
      <Post/>
      </Route>

      <Route  exact path="/get">
      <Table/>
      </Route>
      </Switch>
   </Router>
    </> */}
      <DemoApi />
    </>
  );
}

export default App;
