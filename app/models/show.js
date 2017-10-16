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
    validate: {
      notEmpty: {
        msg: "Title is a required field"
      }
    },
  },
  Network: {
    type: Sequelize.STRING,
    allowNull: false,
      validate: {
      notEmpty: {
        msg: "Network is a required field"
      }
    },
  },
  Genre: {
    type: Sequelize.STRING,
    allowNull: false,
      validate: {
      notEmpty: {
        msg: "Genre is a required field"
      }
    },
  },
  Episodes_Watched: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
      validate: {
      notEmpty: {
        msg: "Episodes Watched is a required field"
      }
    },
  },
  Episodes: {
    type: Sequelize.INTEGER,
    allowNull: false,
      validate: {
      notEmpty: {
        msg: "Episodes is a required field"
      }
    },
  }
}, {
  timestamps: false
});

// Syncs with DB
Show.sync();

// Makes the SHow Model available for other files (will also create a table)
module.exports = Show;
