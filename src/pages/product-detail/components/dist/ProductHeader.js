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
exports.ProductHeader = void 0;
var react_1 = require("react");
var react_2 = require("@chakra-ui/react");
var bs_1 = require("react-icons/bs");
var react_redux_1 = require("react-redux");
var thunk_1 = require("redux/products/thunk");
exports.ProductHeader = function (_a) {
    var _b, _c, _d, _e;
    var product = _a.product, reCall = _a.reCall;
    var toast = react_2.useToast();
    var dispatch = react_redux_1.useDispatch();
    var currentUser = react_redux_1.useSelector(function (state) { return state.apps.userInfo; }) || false;
    var _f = react_1["default"].useState(false), isLoading = _f[0], setLoading = _f[1];
    var handleReactProduct = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    return [4 /*yield*/, dispatch(thunk_1.reactToProduct(product._id))];
                case 1:
                    _a.sent();
                    toast({
                        title: "Congratulation.",
                        description: "You Liked Successfully.",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                        position: "bottom-right"
                    });
                    return [4 /*yield*/, reCall()];
                case 2:
                    _a.sent();
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_2.Box, { w: {
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%"
        }, pt: { base: "30px" } },
        react_1["default"].createElement(react_2.Flex, { justify: "center" },
            react_1["default"].createElement(react_2.Box, { w: {
                    base: "100%",
                    sm: "60%",
                    md: "50%",
                    lg: "45%"
                }, ml: {
                    base: "10px",
                    sm: "45px",
                    md: "0",
                    lg: "0"
                } },
                react_1["default"].createElement(react_2.Avatar, { cursor: "pointer", float: "left", src: (_b = product === null || product === void 0 ? void 0 : product.owner) === null || _b === void 0 ? void 0 : _b.picture }),
                react_1["default"].createElement(react_2.Box, { float: "left", ml: "3", lineHeight: "2" },
                    react_1["default"].createElement(react_2.Text, { fontWeight: "bold" }, (_c = product === null || product === void 0 ? void 0 : product.owner) === null || _c === void 0 ? void 0 : _c.name),
                    react_1["default"].createElement(react_2.Text, { cursor: "pointer", fontSize: "sm" },
                        react_1["default"].createElement(react_2.Link, null, (_d = product === null || product === void 0 ? void 0 : product.owner) === null || _d === void 0 ? void 0 : _d.username)))),
            react_1["default"].createElement(react_2.Box, { flex: { base: 1, md: 0 }, display: "flex", letterSpacing: 1 },
                react_1["default"].createElement(react_2.Button, { float: "left", mx: { md: "10px" }, w: "70px", display: { base: "none", md: "inline-flex" }, fontSize: "sm", fontWeight: 600, letterSpacing: "2px", 
                    // href={'#'}
                    color: "black", bg: "#dcdcdc", _hover: {
                        bg: "#c0c0c0",
                        borderColor: "#d3d3d3"
                    } },
                    react_1["default"].createElement(react_2.Center, null, "Save")),
                react_1["default"].createElement(react_2.Button, { w: { md: "90px" }, float: "left", display: { base: "none", md: "inline-flex" }, fontSize: "base", fontWeight: 600, color: "white", bg: "pink.400", leftIcon: react_1["default"].createElement(bs_1.BsSuitHeartFill, null), 
                    // href={'#'}
                    _hover: {
                        bg: "white",
                        color: "pink.400",
                        borderColor: "#dcdcdc",
                        border: "1px"
                    }, onClick: handleReactProduct, disabled: isLoading, isLoading: isLoading },
                    react_1["default"].createElement(react_2.Center, null, ((_e = product === null || product === void 0 ? void 0 : product.reactions) === null || _e === void 0 ? void 0 : _e.includes(currentUser === null || currentUser === void 0 ? void 0 : currentUser.sub)) ? "Liked" : "Like"))))));
};
