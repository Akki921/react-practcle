import React from 'react';
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import { BrowserRouter as Router, Route} from 'react-router-dom';
class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
  };
}

  render() {
    return <div>
      <Router>

    
       <switch>
       <Navbar/>
        <Route exact path="/business">
          <NewsComponent  pageSize={12} country={"in"} category={"business"} key="business"/>
        </Route>
        <Route exact path="/entertainment">
          <NewsComponent  pageSize={12} country={"in"} category={"entertainment"} key="entertainment"/>
        </Route>
        <Route exact path="/general">
          <NewsComponent  pageSize={12} country={"in"} category={"general"} key="general"/>
        </Route>
        <Route exact path="/health">
          <NewsComponent  pageSize={12} country={"in"} category={"health"} key="health"/>
        </Route>
        <Route exact path="/science">
          <NewsComponent  pageSize={12} country={"in"} category={"science"} key="science"/>
        </Route>
        <Route exact path="/sport">
          <NewsComponent  pageSize={12} country={"in"} category={"sport"} key="sport"/>
        </Route>
        <Route exact path="/technology">
          <NewsComponent  pageSize={12} country={"in"} category={"technology"} key="technology"/>
        </Route>
       </switch>
       </Router>
    </div>;
  }
}

export default App;