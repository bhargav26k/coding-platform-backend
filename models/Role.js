// models/Role.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Role = sequelize.define('Role', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.ENUM('admin', 'instructor', 'student'),
    allowNull: false,
  },
  permissions: {
    type: DataTypes.JSON,
  },
}, {
  tableName: 'Roles',
  timestamps: false,
});

module.exports = Role;
