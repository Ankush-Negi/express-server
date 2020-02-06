"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const patterns_1 = require("./patterns");
const constants_1 = require("./constants");
const utils_1 = require("./utils");
const users = [
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech'
    },
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: '@successive.tech'
    },
    {
        traineeEmail: 'trainee1successive.tech',
        reviewerEmail: 'reviewer1@successive.tech'
    }
];
patterns_1.diamond(6);
patterns_1.equilateral(4);
utils_1.validateUsers(users);
console.log(utils_1.hasPermission(constants_1.permissions.getUsers, "trainee", "read"));
console.log(utils_1.hasPermission(constants_1.permissions.getUsers, "trainee", "all"));
console.log(utils_1.hasPermission(constants_1.permissions.getUsers, "trainer", "write"));
//# sourceMappingURL=index.js.map