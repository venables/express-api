'use strict';

var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      set: function(val) {
        this.setDataValue('email', val.toLowerCase());
      },
      validate: {
        isEmail: true
      }
    },
    passwordDigest: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password_digest'
    }
  }, {
    tableName: 'users',
    paranoid: true,
    setterMethods: {
      password: function(val) {
        var passwordDigest = bcrypt.hashSync(val, 10);
        return this.setDataValue('passwordDigest', passwordDigest);
      }
    },
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Session);
      },

      authenticate: function(email, password) {
        return User.find({ where: { email: email } }).then(function(user) {
          if (bcrypt.compareSync(password, user.get('passwordDigest'))) {
            return user;
          } else {
            throw new Error('Invalid password');
          }
        });
      }
    }
  });

  return User;
};
