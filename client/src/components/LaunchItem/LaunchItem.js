import React from 'react'

// Pass in props of mapped data
export default function LaunchItem({ launch: {flight_number, mission_name, launch_date_local, launch_success} }) {

    return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
            <h4>Mission: { mission_name }</h4>
            {/* Moment.js will be brought in to format date */}
            <p>Date: { launch_date_local }</p>
        </div>
        <div className="col-md-3">
            {/* Placeholder until react-router is in place */}
            <button className="btn btn-secondary">Launch Details</button>
        </div>
      </div>
    </div>
  );
};