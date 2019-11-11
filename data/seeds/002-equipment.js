exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("equipments").then(function() {
    // Inserts seed entries
    return knex("equipments").insert([
      {
        id: 1,
        name: "Elliptical",
        description: "Elliptical Machine",
      },
      {
        id: 2,
        name: "Stationary Bike",
        description: "Stationary Bike",
      },
      {
        id: 3,
        name: "Aerobic Steppers",
        description: "Aerobic Stepper",
      },
      {
        id: 4,
        name: "Cable Pulley",
        description: "Cable Pulley",
      },
      {
        id: 5,
        name: "Weight Machine",
        description: "Weight Machine",
      },
      {
        id: 6,
        name: "Free Weights",
        description: "Free Weights",
      },
      {
        id: 7,
        name: "Abdominal Cruncher",
        description: "Abdominal Cruncher",
      },
      {
        id: 8,
        name: "Rowing Machine",
        description: "Rowing Machine",
      },
      {
        id: 9,
        name: "Exercise Balls",
        description: "Exercise Balls",
      },
      {
        id: 10,
        name: "Treadmill",
        description: "Treadmill",
      }
    ]);
  });
};
