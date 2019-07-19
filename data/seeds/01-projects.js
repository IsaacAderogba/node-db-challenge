const faker = require("faker");

const createFakeProject = () => ({
  name: faker.lorem.words(),
  description: faker.lorem.sentence(),
  isCompleted: faker.random.boolean()
})

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      const fakeProjects = [];
      const numberOfProjects = 10;
  
      for (let i = 0; i < numberOfProjects; i++) {
        fakeProjects.push(createFakeProject());
      }
      knex('projects').insert(fakeProjects);
    });
};
