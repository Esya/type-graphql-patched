"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvalidDirectiveError extends Error {
    constructor(msg, directive) {
        super(`${msg} "${directive.nameOrDefinition}" `);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.InvalidDirectiveError = InvalidDirectiveError;
