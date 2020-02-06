"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_js_1 = require("./helpers.js");
let validId = [];
let invalidId = [];
function validateUsers(user) {
    user.forEach(element => {
        const { traineeEmail, reviewerEmail } = element;
        if (helpers_js_1.validateEmail(traineeEmail) && helpers_js_1.validateEmail(reviewerEmail)) {
            validId.push({ traineeEmail, reviewerEmail });
        }
        else {
            invalidId.push({ traineeEmail, reviewerEmail });
        }
    });
    console.log(':::::::::::Valid Users:::::::::::\n', validId);
    console.log('Count : ', validId.length);
    console.log(':::::::::::Invalid Users:::::::::::\n', invalidId);
    console.log('Count : ', invalidId.length);
}
exports.default = validateUsers;
;
//# sourceMappingURL=validation.js.map