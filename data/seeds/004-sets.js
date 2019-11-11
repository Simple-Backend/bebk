exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("sets")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("sets").insert([
        {
          id: 1,
          weight: 1,
          weight_units: 1,
          distance_units: 1,
          distance: 1,
          reps: 1,
        },
        {
          id: 2,
          weight: 1,
          weight_units: 1,
          distance_units: 1,
          distance: 1,
          reps: 1,
        },
        {
          id: 3,
          weight: 1,
          weight_units: 1,
          distance_units: 1,
          distance: 1,
          reps: 1,
        },
        {
          id: 4,
          weight: 1,
          weight_units: 1,
          distance_units: 1,
          distance: 1,
          reps: 1,
        },
        {
          id: 5,
          weight: 1,
          weight_units: 1,
          distance_units: 1,
          distance: 1,
          reps: 1,
        }
      ]);
    });
};
