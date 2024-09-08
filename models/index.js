const sequelize = require('../config/connection');
const User = require('./user');
const Organization = require('./Organization');
const Question = require('./Question');
const Test = require('./Test');
const TestQuestion = require('./TestQuestion');
const TestResult = require('./TestResult');
const Role = require('./Role');

// Associations
User.belongsTo(Organization, { foreignKey: 'organization_id' });
Organization.hasMany(User, { foreignKey: 'organization_id' });

Test.belongsTo(Organization, { foreignKey: 'organization_id' });
Organization.hasMany(Test, { foreignKey: 'organization_id' });

Test.belongsTo(User, { foreignKey: 'creator_id' });
User.hasMany(Test, { foreignKey: 'creator_id' });

Test.belongsToMany(Question, { through: TestQuestion, foreignKey: 'test_id' });
Question.belongsToMany(Test, { through: TestQuestion, foreignKey: 'question_id' });

TestResult.belongsTo(Test, { foreignKey: 'test_id' });
Test.hasMany(TestResult, { foreignKey: 'test_id' });

TestResult.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(TestResult, { foreignKey: 'user_id' });

module.exports = {
  User,
  Organization,
  Question,
  Test,
  TestQuestion,
  TestResult,
  Role,
  sequelize,
};
