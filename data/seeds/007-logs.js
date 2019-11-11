exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("logs")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("logs").insert([
        {
          id: 1,
          user_id: "1",
          workout_id: 1,
          exercise_id: 1,
          distance_units_id: 1,
          weight_units_id: 1,
          reps: 1,
          distance: 1,
          weight: 1,
          duration: 1,
          workout_complete: true,
        },
        {
          id: 2,
          user_id: "1",
          workout_id: 1,
          exercise_id: 1,
          distance_units_id: 1,
          weight_units_id: 1,
          reps: 1,
          distance: 1,
          weight: 1,
          duration: 1,
          workout_complete: true,
        },        {
          id: 3,
          user_id: "1",
          workout_id: 1,
          exercise_id: 1,
          distance_units_id: 1,
          weight_units_id: 1,
          reps: 1,
          distance: 1,
          weight: 1,
          duration: 1,
          workout_complete: true,
        },        {
          id: 4,
          user_id: "1",
          workout_id: 1,
          exercise_id: 1,
          distance_units_id: 1,
          weight_units_id: 1,
          reps: 1,
          distance: 1,
          weight: 1,
          duration: 1,
          workout_complete: true,
        }
      ]);
    });
};
