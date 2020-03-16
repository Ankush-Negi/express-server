"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errHandler(err, req, res, next) {
    if (Array.isArray(err)) {
        const errArr = [];
        err.forEach(element => {
            errArr.push({
                error: element,
                message: 'error',
                status: 500,
                timestamp: new Date()
            });
        });
        res.send(errArr);
    }
    else {
        const { error, message, status } = err;
        const errorHandler = {
            error: error || 'Not Found',
            message: message || 'Error',
            status: status || 500,
            timestamp: new Date()
        };
        res.send(errorHandler);
    }
}
exports.default = errHandler;
//# sourceMappingURL=errorHandler.js.map