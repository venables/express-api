"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration
      .createTable('sessions', {
        value: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false,
          unique: true
        },
        user_id: {
          type: DataTypes.UUID,
          allowNull: false
        },
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
      })
      .complete(done);
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable('sessions').complete(done);
  }
};
