// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Show = require("../models/show.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all shows
  app.get("/api/all", function(req, res) {
    Show.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get a specific show
  app.get("/api/title/:title", function(req, res) {
    if (req.params.title) {
      Show.findAll({
        where: {
          Title: req.params.title
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  // Get all shows of a specific genre
  app.get("/api/genre/:genre", function(req, res) {
    if (req.params.genre) {
      Show.findAll({
        where: {
          Genre: req.params.genre
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  // Get all Shows from a specific network
  app.get("/api/network/:network", function(req, res) {
    if (req.params.network) {
      Show.findAll({
        where: {
          Network: req.params.network
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

 
  // Add a Show
  app.post("/api/new", function(req, res) {
    console.log("Show Data:");
    console.log(req.body);
    Show.create({
      Title: req.body.Title,
      Network: req.body.Network,
      Genre: req.body.Genre,
      Episodes: req.body.Episodes
    });



  });



  // Delete a Show
  app.post("/api/delete", function(req, res) {
    console.log("Show Data:");
    console.log(req.body);
    Show.destroy({
      where: {
        id: req.body.id
      }
    });
  });
};
