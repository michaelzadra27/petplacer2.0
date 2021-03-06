
import React from 'react';
import {
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Header from './components/Header';
// import Footer from './components/Footer';

import Login from './components/login';
import Signup from './components/signup';
import Navbar from './components/main/navbar';
import Footer from './components/main/footer';
import Navbar2 from './components/main/navbar2';
import Home from './components/main/home';
import MyLikes from './components/main/mylikes';
import MyMatches from './components/main/mymatches';
import LinkAccts from './components/main/linkAccts';


// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });


const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      }
    })
  },

  uri: 'https://petplacer2.herokuapp.com/graphql',


})



console.log(process.env)
function App() {
  return (


    <ApolloProvider client={client}>


  <Switch>

    <Route exact path="/">
    <Signup />
    </Route> 

    <Route exact path="/">
    <Navbar2 />
    </Route>

    <Route exact path="/navbar2">
      <Navbar2 />
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/signup">
      <Signup />
    </Route>
    <Route exact path="/home">
      <Home />
    </Route>
    <Route exact path="/myLikes">
      <MyLikes />
    </Route>
    <Route exact path="/myMatches">
      <MyMatches />
    </Route>
    <Route exact path="/linkaccts">
      <LinkAccts />
    </Route>
    <Route path="*">
      <Signup/>
    </Route>
  </Switch>
  <Footer />
</Router>
</ApolloProvider>

  );
}

export default App;
