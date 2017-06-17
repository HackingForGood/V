import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import User from './User';
import Subject from './Subject';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
} from 'graphql-relay';

const Feedback = new GraphQLObjectType({
  name: 'Feedback',
  sqlTable: 'feedback',
  uniqueKey: 'id',
  fields: () => ({
    name: {
      type: GraphQLString,
      sqlColumn: 'name',
    },
    subject: {
      type: Subject,
      sqlJoin: (feedbackTable, subjectTable) =>
        `${feedbackTable}.subject_id = ${subjectTable}.id`,
    },
    author: {
      type: User,
      sqlJoin: (feedbackTable, userTable) =>
        `${feedbackTable}.author_id = ${userTable}.id`,
    },
    tutor: {
      type: User,
      sqlJoin: (feedbackTable, userTable) =>
        `${feedbackTable}.tutor_id = ${userTable}.id`,
    },
  }),
});


export const FeedbackConnection = connectionDefinitions({
  nodeType: Feedback,
  connectionFields: {
    count: {
      type: GraphQLInt,
      resolve: ({ edges }) => edges.length,
    },
  },
}).connectionType;

export default Feedback;

