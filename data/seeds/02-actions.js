const faker = require("faker");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const createFakeActions = () => ({
  description: faker.lorem.sentence(),
  notes: faker.lorem.words(),
  isCompleted: faker.random.boolean(),
  projects_id: 1 + getRandomInt(9)
});

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("actions")
    .truncate()
    .then(function() {
      const fakeActions = [];
      const numberOfActions = 50;

      for (let i = 0; i < numberOfActions; i++) {
        fakeActions.push(createFakeActions());
      }
      return knex("actions").insert(fakeActions);
    });
};
