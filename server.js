const express = require('express');
const path = require('path');
const app = express();

// Serve only the static files from the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/justinclark-dev'));

app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/justinclark-dev/index.html'));

});

app.listen(process.env.PORT || 8080);
