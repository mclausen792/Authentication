
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'makayla',
          password: '77777'
        },
        {
          id: 2,
          username: 'andrew',
          password: '11111'
        },
        {
          id: 3,
          username: 'madison',
          password: '23232'
         }
      ]);
    });
};
