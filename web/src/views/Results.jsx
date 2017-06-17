import React from "react";
import { graphql } from 'react-apollo';

import DebouncedInput from '../components/DebouncedInput';

import searchTutors from './_data/searchTutors.graphql';

const Results = ({ data: { subject, refetch } }) => {
  const { users } = subject || {};
  return (
    <div>
      <DebouncedInput
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
                <div>{user.fullName}</div>
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