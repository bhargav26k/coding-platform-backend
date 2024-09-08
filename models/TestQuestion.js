// models/TestQuestion.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Test = require('./Test');
const Question = require('./Question');

const TestQuestion = sequelize.define('TestQuestion', {
  test_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Test,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  question_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Question,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
}, {
  tableName: 'Test_Questions',
  timestamps: false,
  indexes: [
    {
      unique: true,
      fields: ['test_id', 'question_id'],
    },
  ],
});

module.exports = TestQuestion;
