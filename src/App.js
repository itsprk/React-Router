import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Fortnite from './Fortnite';
import ItemsDetail from './ItemsDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
    <div className="App">
     <Nav />
     <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/about" component={About} />
     <Route path="/fortnite" exact component={Fortnite} />
     <Route path='/fortnite/:id' component={ItemsDetail} />
     </Switch>
    </div>
    </Router>
  );
}

const Home = () => {
  return(
    <div>
      <h1>This is Home Page</h1>
      <p>To view Fortnite Character click Fortnite at top.</p>
    </div>
  );
}

export default App;
