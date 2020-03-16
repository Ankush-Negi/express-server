"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trainee_1 = require("./controllers/trainee");
const user_1 = require("./controllers/user");
const routers = express_1.Router();
routers.use('/trainee', trainee_1.traineeRouter);
routers.use('/user', user_1.userRouter);
exports.default = routers;
//# sourceMappingURL=router.js.map