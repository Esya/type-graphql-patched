"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const getMetadataStorage_1 = require("../metadata/getMetadataStorage");
function Directive(nameOrDefinition, args) {
    return (targetOrPrototype, propertyKey, descriptor) => {
        const directive = { nameOrDefinition, args: args || {} };
        if (!propertyKey) {
            getMetadataStorage_1.getMetadataStorage().collectDirectiveClassMetadata({
                target: targetOrPrototype,
                directive,
            });
        }
        else {
            if (typeof propertyKey === "symbol") {
                throw new errors_1.SymbolKeysNotSupportedError();
            }
            getMetadataStorage_1.getMetadataStorage().collectDirectiveFieldMetadata({
                target: targetOrPrototype.constructor,
                field: propertyKey,
                directive,
            });
        }
    };
}
exports.Directive = Directive;
