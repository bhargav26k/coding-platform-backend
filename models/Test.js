// models/Test.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Organization = require('./Organization');
const User = require('./user');

const Test = sequelize.define('Test', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  organization_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Organization,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  creator_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    onDelete: 'SET NULL',
  },
  scheduled_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW,
  },
}, {
  tableName: 'Tests',
  timestamps: false,
});

module.exports = Test;
