import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

// Store GraphQL query in variable
// the gql tag makes the actual queries
const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export class Launches extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 my-3">Launches</h1>
        {/* Set query prop to LAUNCHES_QUERY */}
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            // Placeholder for loading spinner, error handling, and return data
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            console.log(data);

            return <h1>Test</h1>;
          }}
        </Query>
      </div>
    );
  }
}

export default Launches;
