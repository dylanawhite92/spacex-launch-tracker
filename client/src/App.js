import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Launches, Launch } from "./components/index";
import Logo from "./images/spaceX-Logo.png";

const client = new ApolloClient({
  uri: '/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <Link to="/">
              <img
                src={Logo}
                alt="SpaceX"
                style={{ width: 300, display: "block", margin: "auto" }}
              />
            </Link>

            {/* Paths hit serve up specific components */}
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
