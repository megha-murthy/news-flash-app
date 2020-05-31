import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import "./App.scss";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Members from "./components/Members";

// import MainPage from "./components/MainPage";
import Settings from "./components/Settings";



function App() {
  
  return (
    
    <div className="App">

      <Router >
    
      {/* <Route exact path="/" component={Signup} /> */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/memberspage" component={Members}/>
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/" component={Members} />



    </Router>

    </div>
  );
}

export default App;
