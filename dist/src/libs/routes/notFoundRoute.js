"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function notFoundRoute(req, res, next) {
    const err = new Error('Not Found');
    next(err);
}
exports.default = notFoundRoute;
//# sourceMappingURL=notFoundRoute.js.map