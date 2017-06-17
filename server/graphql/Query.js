import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';

import jwt from 'jwt-simple';
import joinMonster from 'join-monster';
import sqlstring from 'sqlstring';

import { knex } from '../database';
import User from './User';
import Viewer from './Viewer';
import Subject from './Subject';

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
    subject: {
      type: Subject,
      args: {
        query: {
          type: GraphQLString,
        },
      },
      where: (subject, { query }) => {
        console.log(query);
        if (!query) return null;
        return `
          ${subject}.name ILIKE ${sqlstring.escape(query)} OR
          ${subject}.name_slug ILIKE ${sqlstring.escape(query)}
        `;
      },
      resolve: (parent, args, context, resolveInfo) => {
        return joinMonster(resolveInfo, {}, sql => {
          console.log(sql);
          return knex.raw(sql);
        });
      }
    },
    users: {
      type: new GraphQLList(User),
      args: {
        query: {
          type: GraphQLString,
        },
      },
      where: (usersTable, { query }) => {
        console.log(query);
        if (!query) return null;
        return `
          ${usersTable}.first_name ILIKE ${sqlstring.escape(query)} OR
          ${usersTable}.last_name ILIKE ${sqlstring.escape(query)} OR
          ${usersTable}.email ILIKE ${sqlstring.escape(query)}
        `;
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
        id: { type: GraphQLString },
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
