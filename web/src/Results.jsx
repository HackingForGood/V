import React from "react";
//import {  } from 'semantic-ui-react';

const Results = ({ results }) => (
  <div className="resultsContainer">
    <div className="results">
    {
      Object.keys(results).length != 0 ?
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