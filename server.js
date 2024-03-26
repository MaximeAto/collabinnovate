
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/collabinnovate'));
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/collabinnovate','index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});