exports.up = pgm => {
  pgm.createTable('users', {
    id: {
      type: 'VARCHAR(30)',
      primaryKey: true
    },
    username: {
      type: 'VARCHAR(20)',
      unique: true,
      notNull: true
    },
    profilepict_url: {
      type: 'VARCHAR(40)'
    },
    wallet_address: {
      type: 'VARCHAR(50)'
    },
    description: {
      type: 'TEXT'
    }
  });
};

exports.down = (pgm) => {
  pgm.dropTable('users');
};