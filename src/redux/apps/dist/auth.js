"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.login = exports.register = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var providers_1 = require("providers");
/** @dev Init providers */
var networkProvider = providers_1.getNetworkProvider();
var storageProvider = providers_1.getStorageProvider();
/**
 * @dev The function to produce registation user with API.
 * @type {createAsyncThunk}
 */
exports.register = toolkit_1.createAsyncThunk("file/upload", function (registerDto, _a) {
    var rejectWithValue = _a.rejectWithValue;
    return __awaiter(void 0, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, networkProvider.request("/auth/register", {
                            method: "POST",
                            data: registerDto
                        })];
                case 1:
                    _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _b.sent();
                    return [2 /*return*/, rejectWithValue({ errMsg: "Register user failed" })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
/**
 * @dev The function to produce authenticating user by credential with API.
 * @type {createAsyncThunk}
 */
exports.login = toolkit_1.createAsyncThunk("file/upload", function (loginDto, _a) {
    var rejectWithValue = _a.rejectWithValue;
    return __awaiter(void 0, void 0, void 0, function () {
        var response, e_2, error;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, networkProvider.request("/auth/login", {
                            method: "POST",
                            data: loginDto
                        })];
                case 1:
                    response = _d.sent();
                    /**
                     * @dev Stroage credentails.
                     */
                    storageProvider.setItem("access_token", response === null || response === void 0 ? void 0 : response.access_token);
                    storageProvider.setItem("id_token", response === null || response === void 0 ? void 0 : response.id_token);
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _d.sent();
                    error = JSON.parse(e_2 === null || e_2 === void 0 ? void 0 : e_2.message);
                    return [2 /*return*/, rejectWithValue({ errMsg: (_c = (_b = error === null || error === void 0 ? void 0 : error.data) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.error_description })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
