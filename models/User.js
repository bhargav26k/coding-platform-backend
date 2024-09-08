// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Organization = require('./Organization'); // Import Organization model

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('student', 'instructor', 'admin'),
    allowNull: false,
  },
  organization_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Organization,
      key: 'id',
    },
    onDelete: 'SET NULL',
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
  tableName: 'Users',
  timestamps: false,
});

module.exports = User;
