'use strict';

module.exports = function(sequelize, DataTypes) {
  var Session = sequelize.define('Session', {
    value: DataTypes.STRING
  }, {
    tableName: 'sessions',
    classMethods: {
      associate: function(models) {
        Session.belongsTo(models.User);
      }
    }
  });

  return Session;
};
