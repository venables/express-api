'use strict';

module.exports = function(sequelize, DataTypes) {
  var Session = sequelize.define('Session', {
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE
    }
  }, {
    tableName: 'sessions',
    classMethods: {
      associate: function(models) {
        Session.belongsTo(models.User, { foreignKey: 'user_id' });
      }
    }
  });

  return Session;
};
