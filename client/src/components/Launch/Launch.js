import "./Launch.css";
import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import classNames from "classnames";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export class Launch extends Component {
  render() {
    // Use destructuring to pull params out of props
    let { flight_number } = this.props.match.params;
    // Convert to int, will return error if string
    flight_number = parseInt(flight_number);
    return (
      <>
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
          {({ loading, error, data }) => {
            // Placeholder for loading spinner, error handling, and return launch detail data
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            // Destructuring launch details for cleaner code
            const {
              mission_name,
              flight_number,
              launch_year,
              launch_success,
              rocket: { rocket_id, rocket_name, rocket_type }
            } = data.launch;

            return (
              <div>
                <h1 className="display-4 my-3">
                  <span className="text-dark">Mission:</span> {mission_name}
                </h1>
                <h4 className="mb-3">Launch Details</h4>
                <ul className="list-group">
                  <li className="list-group-item mb-3">
                    Flight Number: {flight_number}
                  </li>
                  <li className="list-group-item mb-3">
                    Launch Year: {launch_year}
                  </li>
                  <li className="list-group-item mb-3">
                    {/* Ternary operator to handle whether boolean of if launch was successful or not */}
                    Launch Successful:{" "}
                    <span
                      className={classNames({
                        "text-success": launch_success,
                        "text-danger": !launch_success
                      })}
                    >
                      {launch_success ? "Yes" : "No"}
                    </span>
                  </li>
                </ul>

                <h4 className="my-3">Rocket Details</h4>
                <ul className="list-group">
                  <li className="list-group-item mb-3">
                    Rocket ID: {rocket_id}
                  </li>
                  <li className="list-group-item mb-3">
                    Rocket Name: {rocket_name}
                  </li>
                  <li className="list-group-item mb-3">
                    Rocket Type: {rocket_type}
                  </li>
                </ul>

                <hr />
                
                <Link to="/" className="btn btn-secondary">
                  Back
                </Link>
              </div>
            );
          }}
        </Query>
      </>
    );
  }
}

export default Launch;
