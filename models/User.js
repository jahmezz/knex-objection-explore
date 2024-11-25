const { Model } = require('objection');
const knex = require('../db/knex'); // Import shared Knex instance

Model.knex(knex); // Bind the shared Knex instance to Objection

class User extends Model {
  static get tableName() {
    return 'users';
  }
}

module.exports = User;