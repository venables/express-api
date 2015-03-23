"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration
      .createTable('sessions', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        value: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
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
