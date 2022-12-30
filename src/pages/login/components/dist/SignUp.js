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
var react_1 = require("react");
var react_2 = require("@chakra-ui/react");
var ai_1 = require("react-icons/ai");
var react_router_dom_1 = require("react-router-dom");
var useForm_1 = require("hooks/useForm");
var dto_1 = require("dto");
var react_redux_1 = require("react-redux");
var auth_1 = require("redux/apps/auth");
var images_1 = require("assets/images");
require("pages/login/style/loginpage.scss");
var SignUp = function () {
    var dispatch = react_redux_1.useDispatch();
    var _a = react_1.useState(false), showPassword = _a[0], setShowPassword = _a[1];
    var history = react_router_dom_1.useHistory();
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    var _c = useForm_1.useForm({
        identityClass: dto_1.RegisterDto
    }), formState = _c.formState, onSubmit = _c.onSubmit, register = _c.register, errors = _c.errors;
    /**
     * @dev The function to handle registation.
     * @param {RegisterDto} dto.
     */
    var handleRegister = function (registerDto) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    setLoading(true);
                    return [4 /*yield*/, dispatch(auth_1.register(registerDto))];
                case 1:
                    _b.sent();
                    setLoading(false);
                    history.push("/signin");
                    return [3 /*break*/, 3];
                case 2:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_2.Stack, { minH: { base: "105vh", md: "75vh" }, direction: { base: "column", md: "row" } },
        react_1["default"].createElement(react_2.Flex, { flex: { lg: "0.8" } },
            react_1["default"].createElement(react_2.Image, { display: { base: "none", lg: "flex" }, w: { lg: "100%" }, alt: "Login Image", objectFit: "cover", src: images_1.SignUpBackground })),
        react_1["default"].createElement(react_2.Flex, { p: 8, flex: 1, align: "center", lineHeight: { lg: "30px" }, justify: "center" },
            react_1["default"].createElement(react_2.Stack, { spacing: 4, w: "full", maxW: "md" },
                react_1["default"].createElement(react_2.Heading, { fontSize: "3xl", pb: "10px" }, "Sign up to Imaginary"),
                react_1["default"].createElement(react_2.Box, { rounded: "lg", pt: 5 },
                    react_1["default"].createElement(react_2.Stack, { spacing: 4, lineHeight: "20px" },
                        react_1["default"].createElement(react_2.Grid, { templateColumns: 'repeat(2, 1fr)', gap: 2 },
                            react_1["default"].createElement(react_2.GridItem, { w: '100%' },
                                react_1["default"].createElement(react_2.Box, null,
                                    react_1["default"].createElement(react_2.FormControl, { id: "firstName" },
                                        react_1["default"].createElement(react_2.FormLabel, { color: "#607d8b" }, "First Name"),
                                        react_1["default"].createElement(react_2.Input, { borderRadius: "20px", fontWeight: "500", fontSize: "sm", type: "text", bg: "gray.200", _focus: { bg: "white", borderColor: "pink.200" }, onChange: function (e) { return register("given_name", e.target.value); }, value: formState === null || formState === void 0 ? void 0 : formState.given_name }),
                                        (errors === null || errors === void 0 ? void 0 : errors.given_name) && react_1["default"].createElement(react_2.Text, { color: "red.300", fontSize: 10 }, errors.given_name)))),
                            react_1["default"].createElement(react_2.GridItem, { w: '100%' },
                                react_1["default"].createElement(react_2.Box, null,
                                    react_1["default"].createElement(react_2.FormControl, { id: "lastName" },
                                        react_1["default"].createElement(react_2.FormLabel, { color: "#607d8b" }, "Last Name"),
                                        react_1["default"].createElement(react_2.Input, { borderRadius: "20px", fontWeight: "500", fontSize: "sm", type: "text", bg: "gray.200", _focus: { bg: "white", borderColor: "pink.200" }, onChange: function (e) { return register("family_name", e.target.value); }, value: formState === null || formState === void 0 ? void 0 : formState.family_name }),
                                        (errors === null || errors === void 0 ? void 0 : errors.family_name) && react_1["default"].createElement(react_2.Text, { color: "red.300", fontSize: 10 }, errors.family_name))))),
                        react_1["default"].createElement(react_2.FormControl, { id: "fullname" },
                            react_1["default"].createElement(react_2.FormLabel, { color: "#607d8b" }, "Full Name"),
                            react_1["default"].createElement(react_2.Input, { borderRadius: "20px", fontWeight: "500", fontSize: "sm", type: "email", bg: "gray.200", _focus: { bg: "white", borderColor: "pink.200" }, onChange: function (e) { return register("name", e.target.value); }, value: formState === null || formState === void 0 ? void 0 : formState.name }),
                            (errors === null || errors === void 0 ? void 0 : errors.name) && react_1["default"].createElement(react_2.Text, { color: "red.300", fontSize: 10 }, errors.name)),
                        react_1["default"].createElement(react_2.FormControl, { id: "email" },
                            react_1["default"].createElement(react_2.FormLabel, { color: "#607d8b" }, "Email address"),
                            react_1["default"].createElement(react_2.Input, { borderRadius: "20px", fontWeight: "500", fontSize: "sm", type: "email", bg: "gray.200", _focus: { bg: "white", borderColor: "pink.200" }, onChange: function (e) { return register("email", e.target.value); }, value: formState === null || formState === void 0 ? void 0 : formState.email }),
                            (errors === null || errors === void 0 ? void 0 : errors.email) && react_1["default"].createElement(react_2.Text, { color: "red.300", fontSize: 10 }, errors.email)),
                        react_1["default"].createElement(react_2.FormControl, { id: "username" },
                            react_1["default"].createElement(react_2.FormLabel, { color: "#607d8b" }, "Username"),
                            react_1["default"].createElement(react_2.Input, { borderRadius: "20px", fontWeight: "500", fontSize: "sm", type: "email", bg: "gray.200", _focus: { bg: "white", borderColor: "pink.200" }, onChange: function (e) { return register("username", e.target.value); }, value: formState === null || formState === void 0 ? void 0 : formState.username }),
                            (errors === null || errors === void 0 ? void 0 : errors.username) && react_1["default"].createElement(react_2.Text, { color: "red.300", fontSize: 10 }, errors.username)),
                        react_1["default"].createElement(react_2.FormControl, { id: "password" },
                            react_1["default"].createElement(react_2.FormLabel, { color: "#607d8b" }, "Password"),
                            react_1["default"].createElement(react_2.InputGroup, null,
                                react_1["default"].createElement(react_2.Input, { borderRadius: "20px", fontWeight: "500", fontSize: "sm", placeholder: "6+ characters", type: showPassword ? "text" : "password", bg: "gray.200", _focus: { bg: "white", borderColor: "pink.200" }, onChange: function (e) { return register("password", e.target.value); }, value: formState === null || formState === void 0 ? void 0 : formState.password }),
                                (errors === null || errors === void 0 ? void 0 : errors.password) && react_1["default"].createElement(react_2.Text, { color: "red.300", fontSize: 10 }, errors.password),
                                react_1["default"].createElement(react_2.InputRightElement, { h: "full" },
                                    react_1["default"].createElement(react_2.Button, { variant: "ghost", onClick: function () {
                                            return setShowPassword(function (showPassword) { return !showPassword; });
                                        } }, showPassword ? react_1["default"].createElement(ai_1.AiFillEye, null) : react_1["default"].createElement(ai_1.AiFillEyeInvisible, null))))),
                        react_1["default"].createElement(react_2.Button, { loadingText: "Submitting", color: "white", borderRadius: "10px", bg: "#ff4584", fontWeight: "500", _hover: { bg: "#f53677" }, letterSpacing: "1px", paddingX: "20px", width: "200px", isLoading: loading, disabled: loading, onClick: function () { return onSubmit(handleRegister); } }, "Create Account"),
                        react_1["default"].createElement(react_2.Stack, { pt: 6 },
                            react_1["default"].createElement(react_2.Text, { align: "left" },
                                "Already a member? ",
                                react_1["default"].createElement(react_2.Link, { color: "#4f3cc9", onClick: function () { return history.push("/signin"); } }, "Sign In")))))))));
};
exports["default"] = SignUp;
