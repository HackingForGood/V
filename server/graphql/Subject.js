import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import User, { UserConnection } from './User';

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
    users: {
      type: new GraphQLList(User),
      junctionTable: 'subjects_users',
      sqlJoins: [
        (subjectTable, junctionTable, args) => `${subjectTable}.id = ${junctionTable}.subject_id`,
        (junctionTable, userTable, args) => `${junctionTable}.user_id = ${userTable}.id`
      ],
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

