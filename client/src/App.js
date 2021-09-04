import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Login from './components/login';
import Signup from './components/signup';
import Navbar from './components/main/navbar';
import Footer from './components/main/footer';
import Navbar2 from './components/main/navbar2';
import Home from './components/main/home';
import MyLikes from './components/main/mylikes';



const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/matchup">
              {/* <Matchup /> */}
            </Route>
            <Route exact path="/matchup/:id">
              {/* <Vote /> */}
            </Route>
            <Route>
              {/* <NotFound /> */}
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  )};

export default App;

