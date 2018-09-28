const app = require("./app");
const { sequelize } = require('./sequelize/models/models.sign');
const config = require("./config/config")
const http = require("http");

const server = http.createServer(app);

sequelize.sync({ schema: config.db.schema }).then(() => {
    console.log('Database connection successful');
    server.listen(3000, () => {
        console.log("listening ");
    });
}).catch((err) => {
    console.log(`Can't connect to DB: ${err}`);
});