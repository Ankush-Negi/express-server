"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const seedData_1 = require("./seedData");
class Database {
}
exports.default = Database;
Database.open = (mongoURL) => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, err => {
            if (err) {
                reject();
                console.log('Error in connection with mongooseDB');
            }
            else {
                resolve();
                seedData_1.default();
                console.log('Successful connection with mongooseDB');
            }
        })
            .catch(error => console.log(error));
    });
};
Database.disconnect = () => {
    mongoose.connection.close();
    console.log('Database Disconnected');
};
//# sourceMappingURL=Database.js.map