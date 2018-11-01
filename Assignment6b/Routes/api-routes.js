
const toDoList = require('../data/toDoList.js');
const completed = require('../data/completed.js');

module.exports = function(app) {
    app.get('/api/toDoList', function(req, res) {
        res.json(toDoList);
      });

      app.post('/api/toDoList', function(req, res) {
        res.json({ success: true });
      });

      app.post('/api/tasks', function(req, res) {
        toDoList.push(req.body)
        res.json(toDoList);
      });
    
      app.get('/api/toDoList/:index', function(req, res) {
        res.json(toDoList[req.params.index]);
      });
    }
    