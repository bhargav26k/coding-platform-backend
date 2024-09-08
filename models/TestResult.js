// models/TestResult.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Test = require('./Test');
const User = require('./user');

const TestResult = sequelize.define('TestResult', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  test_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Test,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  score: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  submission_data: {
    type: DataTypes.JSON,
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
  tableName: 'Test_Results',
  timestamps: false,
});

module.exports = TestResult;
