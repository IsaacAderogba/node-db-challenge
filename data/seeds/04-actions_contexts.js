function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const createFakeActionContexts = () => ({
  actions_id: 1 + getRandomInt(50),
  contexts_id: 1 + getRandomInt(3)
});

exports.seed = function(knex) {
  return knex("actions_contexts")
    .truncate()
    .then(function() {
      const fakeActionContexts = [];
      const numberOfActionContexts = 50;

      for (let i = 0; i < numberOfActionContexts; i++) {
        fakeActionContexts.push(createFakeActionContexts());
      }
      return knex("actions_contexts").insert(fakeActionContexts);
    });
};
