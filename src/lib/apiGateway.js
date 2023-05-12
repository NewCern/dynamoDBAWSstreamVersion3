"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatJSONResponse = void 0;
const formatJSONResponse = ({ 
// accept an object as an argument
statusCode = 200, data = {}, headers, }) => {
    return {
        statusCode,
        body: JSON.stringify(data),
        headers: Object.assign({ 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': '*', 'Access-Control-Allow-Origin': '*' }, headers),
    };
};
exports.formatJSONResponse = formatJSONResponse;
