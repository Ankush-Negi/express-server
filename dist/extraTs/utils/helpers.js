"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateEmail(email) {
    const reg = /^[a-z0-9](\.?[a-z0-9]){5,}@successive\.tech$/;
    if (reg.test(email) === false) {
        return (false);
    }
    else {
        return (true);
    }
}
exports.validateEmail = validateEmail;
//# sourceMappingURL=helpers.js.map