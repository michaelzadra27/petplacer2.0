import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Login from './components/login';
import Signup from './components/signup';
import Navbar from './components/main/navbar';
import Footer from './components/main/footer';
import Navbar2 from './components/main/navbar2';
import Home from './components/main/home';
import MyLikes from './components/main/mylikes';
import MyMatches from './components/main/mymatches';

// import MyLikes from './components/main/mylikes';




// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// })

function App() {
  return (
    // <ApolloProvider client={client}>

    <Router>
      <Navbar />
      {/* <div className="flex-column justify-center align-center min-100-vh bg-primary"> */}
      <Switch>
        <Route exact path="/">
          <Navbar2 />
        </Route>
        <Route exact path="/login">
          <Login />
          {/* <Matchup /> */}
        </Route>
        <Route exact path="/signup">
          <Signup />
          {/* <Vote /> */}
        </Route>
        <Route exact path="/home">
          <Home />
          {/* <NotFound /> */}
        </Route>
        <Route exact path="/myLikes">
          <MyLikes />
        </Route>
        <Route exact path="/myMatches">
          <MyMatches />
        </Route>
      </Switch>
      <Footer />
      {/* </div> */}
    </Router>
    // </ApolloProvider>
  )
};

export default App;

