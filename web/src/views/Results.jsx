import React from "react";
import { graphql } from 'react-apollo';
import DebouncedInput from '../components/DebouncedInput';

import searchTutors from './_data/searchTutors.graphql';

const Results = ({ data: { subject, refetch } }) => {
  const { users } = subject || {};
  return (
    <div className="searchResults">
      <DebouncedInput
        className="searchpageInput"
        type="text"
        name="search"
        debounceProps={{
          subscribe: ({ value }) => {
            refetch({
              query: value.trim() ? `${value.toLowerCase().trim()}%` : null,
            });
          },
        }}
      />
      <div className="resultsContainer">
        <div>
          <div>
            {(users) ? (
              users.map((user) => (
                <div className ="userRow">
                  <div className="rowType">{user.fullName}</div>
                  <div className="rowType">{user.email}</div>
                  <div className="rowType">{user.baseRate}</div>
                  <div className="rowType">{user.email}</div>
                  <div className="feedbackSection">
                    <div className="feedbackBody">{user.feedbackReceived.body}</div>
                    <div className="feedbackBody">{user.feedbackReceived.rating}</div>
                  </div>
                  <div className="subjectsSection">
                    <div className="subjectsBody">{user.subjects.name}</div>
                  </div>
                </div>
              ))
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const withData = graphql(searchTutors);

export default withData(Results);