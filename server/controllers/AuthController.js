import bcrypt from 'bcrypt-nodejs';
import Promise from 'bluebird';
import { mapKeys, snakeCase } from 'lodash';

const hash = Promise.promisify(require('bcrypt-nodejs').hash);
const compare = Promise.promisify(require('bcrypt-nodejs').compare);

import { knex } from '../database';

import jwt from 'jwt-simple';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await knex('users').where({ email }).first();
    if (!user) return res.sendStatus(404);
    const isMatch = await compare(password, user.password);
    if (isMatch) {
      return res.status(200).json({
        token: jwt.encode(user, process.env.APP_SECRET),
      });
    } else {
      return res.status(200).json({ token: null });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
};

export const register = async (req, res) => {
  const { password: rawPassword } = req.body;
  try {
    const password = await hash(rawPassword, null, null);
    const user = await knex('users').insert(mapKeys({
      ...req.body, password
    }, (val, key) => snakeCase(key))).returning('*');
    return res.status(200).json({
      token: jwt.encode(user, process.env.APP_SECRET),
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
};

