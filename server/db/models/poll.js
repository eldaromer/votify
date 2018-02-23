'use strict';
module.exports = (sequelize, DataTypes) => {

  const Poll = sequelize.define('Poll', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});


  Poll.associate = function(models) {
    // associations can be defined here
  };

  return Poll;
};
