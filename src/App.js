import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import SearchPage from './SearchPage';
import SignIn from './SignIn';
import Form from './Form';
import Newuser from './Newuser';
import Newcard from './Newcard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/newuser">
            <Newuser />
          </Route>
          <Route exact path="/newcards/card1" >
            <Newcard img="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
              title="Online Experiences"
              description="Unique activities we can do together, led by a world of hosts."
              price="5000"
            />
          </Route>
          <Route exact path="/newcards/card2" >
            <Newcard img="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."
              price="5000"
            />
          </Route>
          <Route exact path="/newcards/card3" >
            <Newcard img="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
              title="Online Experiences"
              description="Unique activities we can do together, led by a world of hosts."
              price="5000"
            />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
