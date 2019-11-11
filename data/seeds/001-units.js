exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("units")
    .then(function() {
      // Inserts seed entries
      return knex("units").insert([
        {
          id: 1,
          name: 'pound',
          name_plural: 'pounds',
          abrv: "lb",
          system: 'standard',
          purpose: 'weight',
        },
        {
          id: 2,
          name: 'gram',
          name_plural: 'grams',
          abrv: "gm",
          system: 'metric',
          purpose: 'weight',
        },
        {
          id: 3,
          name: 'kilogram',
          name_plural: 'kilograms',
          abrv: "kg",
          system: 'metric',
          purpose: 'weight',
        },
        {
          id: 4,
          name: 'metre',
          name_plural: 'metres',
          abrv: "m",
          system: 'metric',
          purpose: 'distance',
        },
        {
          id: 5,
          name: 'foot',
          name_plural: 'feet',
          abrv: "ft",
          system: 'standard',
          purpose: 'distance',
        },
        {
          id: 6,
          name: 'mile',
          name_plural: 'miles',
          abrv: "mi",
          system: 'standard',
          purpose: 'distance',
        },
        {
          id: 7,
          name: 'kilometer',
          name_plural: 'kilometer',
          abrv: 'km',
          system: 'metric',
          purpose: 'distance',
        },
        {
          id: 8,
          name: 'celcius',
          name_plural: 'celcius',
          abrv: 'c',
          system: 'metric',
          purpose: 'temperature',
        },
        {
          id: 9,
          name: 'fahrenheit',
          name_plural: 'fahrenheit',
          abrv: 'f',
          system: 'standard',
          purpose: 'temperature',
        }
      ]);
    });
};
