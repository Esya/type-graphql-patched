import { DirectiveMetadata } from "../metadata/definitions/directive-metadata";
export declare class InvalidDirectiveError extends Error {
    constructor(msg: string, directive: DirectiveMetadata);
}
