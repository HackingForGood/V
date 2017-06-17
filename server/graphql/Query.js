import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';

import jwt from 'jwt-simple';
import joinMonster from 'join-monster';

import { knex } from '../database';
import User from './User';
import Viewer from './Viewer';

const QueryRoot = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    version: {
      type: GraphQLString,
      resolve: () => '1.0.0',
    },
    viewer: {
      type: Viewer,
      args: {
        jwt: { type: GraphQLString },
      },
      resolve: async (parent, { jwt: token = '' }) => {
        if (!token) return null;
        try {
          return await jwt.decode(token, process.env.APP_SECRET);
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    },
    users: {
      type: new GraphQLList(User),
      args: {
        jwt: { type: GraphQLString },
      },
      resolve: (parent, args, context, resolveInfo) => {
        return joinMonster(resolveInfo, {}, sql => {
          console.log(sql);
          return knex.raw(sql);
        });
      }
    },
    user: {
      type: User,
      args: {
        id: { type: GraphQLInt },
      },
      where: (usersTable, { id }) =>
        (id) ? `${usersTable}.id = ${id}` : null,
      resolve: (parent, args, context, resolveInfo) => {
        return joinMonster(resolveInfo, {}, sql => {
          console.log(sql);
          return knex.raw(sql);
        });
      }
    },
  }),
});

export default QueryRoot;
