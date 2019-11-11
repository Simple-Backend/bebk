exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("workouts")

    .then(function() {
      // Inserts seed entries
      return knex("workouts").insert([
        {
          id: 1,
          name: "Toilet Lift",
          exercise_ids: [1,2,3],
          exercise_description: [""],
          description: "",
        },
        {
          id: 2,
          name: "Couch Pivot",
          exercise_ids: [1,2,3],
          exercise_description: [""],
          description: "",
        },
        {
          id: 3,
          name: "Burrito Roll",
          exercise_ids: [1,2,3],
          exercise_description: [""],
          description: "",
        },
        {
          id: 4,
          name: "Chinese Buffet",
          exercise_ids: [1,2,3],
          exercise_description: [""],
          description: "",
        },
        {
          id: 5,
          name: "Hot Dog Contest",
          exercise_ids: [1,2,3],
          exercise_description: [""],
          description: "",
        }
      ]);
    });
};
