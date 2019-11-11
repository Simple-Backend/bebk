exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")

    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          user_id: "1",
          username: "teamworkouttracker",
          password: "Sunz0utGunz0ut",
          email: "teamworkouttracker@gmail.com",
          body_goal: "",
          first_name: "",
          last_name: "",
          unit_system: "",
          avatar: "",
        }
      ]);
    });
};
