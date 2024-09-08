// models/Organization.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Organization = sequelize.define('Organization', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('school', 'university', 'company'),
    allowNull: false,
  },
  plan: {
    type: DataTypes.ENUM('free', 'standard', 'premium'),
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
  tableName: 'Organizations',
  timestamps: false,
});

module.exports = Organization;
