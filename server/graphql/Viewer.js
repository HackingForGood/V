import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import { knex } from '../database';
import joinMonster from 'join-monster';

import User from './User';

const Viewer = new GraphQLObjectType({
  name: 'Viewer',
  fields: () => ({
    user: {
      type: User,
      where: (table, args, context) => {
        console.log(context);
        if (args.id) return `${table}.id = ${context.id}`;
      },
      resolve: (parent, args, context, resolveInfo) =>
        joinMonster(resolveInfo, {}, sql => knex.raw(sql)),
    },
  }),
});

export default Viewer;