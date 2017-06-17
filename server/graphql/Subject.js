import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import { UserConnection } from './User';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
} from 'graphql-relay';

const Subject = new GraphQLObjectType({
  name: 'Subject',
  sqlTable: 'subjects',
  uniqueKey: 'id',
  fields: () => ({
    name: {
      type: GraphQLString,
      sqlColumn: 'name',
    },
    userConnection: {
      type: UserConnection,
      args: connectionArgs,
      resolve: (subject, args) => connectionFromArray(subject.userConnection, args),
    },
  }),
});


export const SubjectConnection = connectionDefinitions({
  nodeType: Subject,
  connectionFields: {
    count: {
      type: GraphQLInt,
      resolve: ({ edges }) => edges.length,
    },
  },
}).connectionType;

export default Subject;

