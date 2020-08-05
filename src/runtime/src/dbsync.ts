// Setup server.
import "reflect-metadata";
import { createConnection } from "typeorm";

// Start connection to the database and then start the server.
createConnection().then(async connection => {

    await connection.synchronize();
    console.log("Synchronized database");
    connection.close();

}).catch(error => console.log(error));