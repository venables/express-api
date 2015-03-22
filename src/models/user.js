'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: DataTypes.UUID,
    email: DataTypes.STRING,
    passwordDigest: {
      type: DataTypes.STRING,
      field: 'password_digest'
    }
  }, {
    tableName: 'users',
    paranoid: true,
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Session)
      }
    }
  });

  return User;
};
