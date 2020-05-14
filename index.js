const express = require("express");

const config = require("./services/config");
const { connectDb } = require("./services/db");

const app = express();

require("./services/logging");

if (config.NODE_ENV === "production") {
    require("./services/prod")(app);
}
require("./services/routes")(app);

connectDb().then(() => {
    console.log("Connected to MongoDB");

    const PORT = config.PORT || 3000;
    app.listen(PORT, () => {
        console.log("Listening on port: " + PORT);
    });
});
