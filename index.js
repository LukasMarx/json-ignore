"use strict";
require("reflect-metadata");
var formatMetadataKey = "jsonIgnore";
function jsonIgnore() {
    return Reflect.metadata(formatMetadataKey, true);
}
exports.jsonIgnore = jsonIgnore;
function getJsonIgnore(object, propertyKey) {
    return Reflect.getMetadata(formatMetadataKey, object, propertyKey);
}
exports.getJsonIgnore = getJsonIgnore;
function jsonIgnoreReplacer(key, value) {
    var meta = getJsonIgnore(this, key);
    if (meta === true) {
        return undefined;
    }
    return value;
}
exports.jsonIgnoreReplacer = jsonIgnoreReplacer;
//# sourceMappingURL=index.js.map