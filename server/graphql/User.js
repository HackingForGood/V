import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import { capitalize } from 'lodash';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
} from 'graphql-relay';

import { SubjectConnection } from './Subject';
import { FeedbackConnection } from './Feedback';

const User = new GraphQLObjectType({
  name: 'User',
  sqlTable: 'users',
  uniqueKey: 'id',
  fields: () => ({
    email: {
      type: GraphQLString,
      sqlColumn: 'email',
    },
    fullName: {
      type: GraphQLString,
      sqlDeps: ['first_name', 'last_name'],
      resolve: ({ first_name: firstName, last_name: lastName, }) =>
        `${capitalize(firstName)} ${capitalize(lastName)}`,
    },
    firstName: {
      type: GraphQLString,
      sqlColumn: 'first_name',
    },
    lastName: {
      type: GraphQLString,
      sqlColumn: 'last_name',
    },
    subjectConnection: {
      type: SubjectConnection,
      args: connectionArgs,
      junctionTable: 'subjects_users',
      sqlJoins: [
        (userTable, junctionTable, args) => `${userTable}.id = ${junctionTable}.user_id`,
        (junctionTable, subjectTable, args) => `${junctionTable}.subject_id = ${subjectTable}.id`
      ],
      resolve: (user, args) => connectionFromArray(user.subjectConnection, args),
    },
    feedbackReceivedConnection: {
      type: FeedbackConnection,
      args: connectionArgs,
      sqlJoin: (feedbackTable, userTable) =>
        `${feedbackTable}.id = ${userTable}.tutor_id`,
      resolve: (user, args) =>
        connectionFromArray(user.feedbackReceivedConnection, args),
    },
  }),
});

export const UserConnection = connectionDefinitions({
  nodeType: User,
  connectionFields: {
    count: {
      type: GraphQLInt,
      resolve: ({ edges }) => edges.length,
    },
  },
}).connectionType;

export default User;
