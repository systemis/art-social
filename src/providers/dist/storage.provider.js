"use strict";
exports.__esModule = true;
exports.StorageProvider = void 0;
var StorageProvider = /** @class */ (function () {
    function StorageProvider() {
        this.PREFIX = process.env.HOST_NAME;
    }
    /**
     * @param key
     * @param value
     * @description
     * The function to set the value with an associated key
     */
    StorageProvider.prototype.setItem = function (key, value) {
        localStorage.setItem(this.PREFIX + "_" + key, value);
    };
    /**
     * @param key
     * @returns value
     * @description
     * The function to get value with an associated key
     */
    StorageProvider.prototype.getItem = function (key) {
        return localStorage.getItem(this.PREFIX + "_" + key);
    };
    /**
     * @param key
     * @param {boolean} wPrefix true mean user wanna remove a storage data which saved without hamster prefix.
     * @returns
     * @description
     * The function to remove value with an associated key
     */
    StorageProvider.prototype.removeItem = function (key, wPrefix) {
        if (wPrefix) {
            return localStorage.removeItem(key);
        }
        return localStorage.removeItem((wPrefix ? "" : this.PREFIX) + "_" + key);
    };
    return StorageProvider;
}());
exports.StorageProvider = StorageProvider;
