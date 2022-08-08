const express = require('express');
const app = express();
app.use('/', (req, res) => {
    res.send('Hello Node with AWS');

});
app.listen(process.env.PORT || 5000, () => { console.log("Node-AWS running om 5000 post") });