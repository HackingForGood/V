import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import { capitalize } from 'lodash';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
} from 'graphql-relay';

import Subject, { SubjectConnection } from './Subject';
import Feedback, { FeedbackConnection } from './Feedback';

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
    baseRate: {
      type: GraphQLInt,
      sqlColumn: 'base_rate',
    },
    firstName: {
      type: GraphQLString,
      sqlColumn: 'first_name',
    },
    lastName: {
      type: GraphQLString,
      sqlColumn: 'last_name',
    },
    subjects: {
      type: new GraphQLList(Subject),
      junctionTable: 'subjects_users',
      sqlJoins: [
        (userTable, junctionTable, args) => `${userTable}.id = ${junctionTable}.user_id`,
        (junctionTable, subjectTable, args) => `${junctionTable}.subject_id = ${subjectTable}.id`
      ],
    },
    feedbackReceived: {
      type: new GraphQLList(Feedback),
      junctionTable: 'subjects_users',
      sqlJoin: (feedbackTable, userTable) =>
        `${feedbackTable}.id = ${userTable}.tutor_id`,
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
  edgeFields: {
    rate: {
      type: GraphQLInt,
      resolve: (something, anotherthing) => {
        console.log(something);
        console.log(anotherthing);
        return null;
      }
    }
  },
}).connectionType;

export default User;
