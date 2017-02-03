"use strict";
require("reflect-metadata");
var formatMetadataKey = "jsonIgnore";
var jsonReplaceByKeyConst = "jsonReplaceByKey";
var jsonReplaceByValueConst = "jsonReplaceByValue";
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
    var constant = getJsonReplaceByConstant(this, key);
    if (constant != null) {
        return constant;
    }
    var childKey = getJsonReplaceByChildValue(this, key);
    if (childKey != null) {
        return value[childKey];
    }
    return value;
}
exports.jsonIgnoreReplacer = jsonIgnoreReplacer;
function jsonReplaceByChildValue(childKey) {
    return Reflect.metadata(jsonReplaceByKeyConst, childKey);
}
exports.jsonReplaceByChildValue = jsonReplaceByChildValue;
function jsonReplaceByConstant(value) {
    return Reflect.metadata(jsonReplaceByValueConst, value);
}
exports.jsonReplaceByConstant = jsonReplaceByConstant;
function getJsonReplaceByChildValue(object, propertyKey) {
    return Reflect.getMetadata(jsonReplaceByKeyConst, object, propertyKey);
}
exports.getJsonReplaceByChildValue = getJsonReplaceByChildValue;
function getJsonReplaceByConstant(object, propertyKey) {
    return Reflect.getMetadata(jsonReplaceByValueConst, object, propertyKey);
}
exports.getJsonReplaceByConstant = getJsonReplaceByConstant;
//# sourceMappingURL=index.js.map