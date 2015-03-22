'use strict';

module.exports = function(sequelize, DataTypes) {
  var Session = sequelize.define('Session', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Session.belongsTo(models.User);
      }
    }
  });

  return Session;
};
