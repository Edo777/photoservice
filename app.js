const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const AdminRouter = require(`./routes/admin.route`);
const PhotoserviceRouter = require("./routes/photoservice.route");
const ClientRouter = require("./routes/client.route");
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/admin', AdminRouter);
app.use('/photoservice', PhotoserviceRouter);
app.use('/client', ClientRouter);



// app.use((err, req, res, next) => {
//     return res.status(400).json(err.message);
// })

module.exports = app;