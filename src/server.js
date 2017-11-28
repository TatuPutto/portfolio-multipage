var express    = require('express');
var app        = express();
var path       = require('path');
var port       = process.env.PORT || 8080;
var publicPath = path.join(__dirname, '../public');

app.set('publicPath', publicPath);
app.use(express.static(app.get('publicPath')));

// server landing page
app.get('/', function (req, res) {
    res.sendFile(path.join(publicPath, './html', 'home.html'));
});

// server projects page
app.get('/projects', function (req, res) {
    res.sendFile(path.join(publicPath, './html', 'projects.html'));
});

app.listen(port, function () {
    console.log('Listening at: ' + port);
});
