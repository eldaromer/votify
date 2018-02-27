'use strict';
module.exports = (sequelize, DataTypes) => {

  const Poll = sequelize.define('Poll', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    options: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    votes: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    }
  }, {});


  Poll.associate = function(models) {
    Poll.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE  '
    });
  };

  return Poll;
};
