exports.up = pgm => {
  pgm.createTable('commissions', {
    id: {
      type: 'VARCHAR(30)',
      primaryKey: true
    },
    user_id: {
      type: 'VARCHAR(50)',
      notNull: true,
      references: 'users(username)'
    },
    title: {
      type: 'VARCHAR(25)',
      notNull: true
    },
    description: {
      type: 'TEXT',
      notNull: true
    },
    price: {
      type: 'INTEGER',
      notNull: true
    },
    max_revision: {
      type: 'INTEGER',
      notNull: true
    },
    availability: {
      type: 'BOOLEAN',
      notNull: true,
      default: true
    },
    image_url: {
      type: 'VARCHAR(50)'
    }
  });
};

exports.down = (pgm) => {
  pgm.dropTable('commissions');
};