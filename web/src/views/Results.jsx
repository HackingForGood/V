import React from "react";
//import {  } from 'semantic-ui-react';

const Results = ({ user }) => (
  <div className="resultsContainer">
    <div className="results">
    {
      Object.keys(user).length != 0 ?
      <span className="noResults">
        hey
      </span> :
      <span className="noResults">
        No resuts :(
      </span>
    }
    </div>
  </div>
)

export default Results;