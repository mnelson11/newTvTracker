// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Show" model that matches up with DB
var Show = sequelize.define("show", {
  Title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Network: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Genre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Episodes_Watched: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  Episodes: {
    type: Sequelize.INTEGER,
  }
}, {
  timestamps: false
});

// Syncs with DB
Show.sync();

// Makes the SHow Model available for other files (will also create a table)
module.exports = Show;
