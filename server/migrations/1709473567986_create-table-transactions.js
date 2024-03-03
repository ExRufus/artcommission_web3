exports.up = pgm => {
  pgm.createTable('transactions', {
    id: {
      type: 'VARCHAR(30)',
      primaryKey: true
    },
    commission_id: {
      type: 'VARCHAR(30)',
      notNull: true
    },
    client_address: {
      type: 'VARCHAR(30)',
      notNull: true,
      references: 'users()'
    }
  })
};

exports.down = pgm => {};
