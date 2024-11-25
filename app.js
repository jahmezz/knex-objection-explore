const User = require('./models/User'); // Objection Model
const knex = require('./db/knex'); // Shared Knex Instance

async function main() {
  try {
    // Fetch all users
    const users = await User.query();
    console.log('All Users:', users);

    // Add a new user
    const newUser = await User.query().insert({
      name: 'Charlie',
      email: 'charlie@example3676.com',
    });
    console.log('New User:', newUser);

    // Find a user by ID
    const user = await User.query().findById(1);
    console.log('User with ID 1:', user);

    // Update a user
    const updatedUser = await User.query().patchAndFetchById(1, {
      name: 'Alice Updated',
    });
    console.log('Updated User:', updatedUser);

    // Delete a user
    await User.query().deleteById(2);
    console.log('Deleted User with ID 2');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Close the database connection
    await knex.destroy();
  }
}

main()
  .then(() => {
    console.log('Script completed.');
  })
  .catch((error) => {
    console.error('Error in main:', error);
  });