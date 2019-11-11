exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("exercises")
 
    .then(function() {
      // Inserts seed entries
      return knex("exercises").insert([
        {
          id: 1,
          name: "Ex 1",
          sets: [1,2,3],
          user_id: '1',
          equipment_id: 1,
          description: "An Exercise",
          workout_type: "Type 1",
          created: 111,
          updated: 112
        }
      ]);
    });
};
