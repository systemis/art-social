"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("@chakra-ui/react");
var app_1 = require("constants/app");
var react_2 = require("react");
var DesignTab_1 = require("pages/profile/components/tabs/DesignTab");
var CollectionTab_1 = require("pages/profile/components/tabs/CollectionTab");
var LikedTab_1 = require("pages/profile/components/tabs/LikedTab");
var AboutTab_1 = require("pages/profile/components/tabs/AboutTab");
var react_redux_1 = require("react-redux");
var thunk_1 = require("redux/products/thunk");
var thunk_2 = require("redux/projects/thunk");
var ProfileTab = react_2.memo(function ProfileTab(_a) {
    var rest = __rest(_a, []);
    return (react_2["default"].createElement(react_1.Tab, __assign({ _selected: { color: "black" }, color: "#6e6d7a", fontSize: "16px", fontWeight: "700" }, rest)));
});
var DesignInfo = function () {
    var isDesktop = react_1.useMediaQuery("(min-width: " + app_1.QUERY_MOBILE + ")", {
        ssr: false
    })[0];
    var currentUser = react_redux_1.useSelector(function (state) { return state.apps.userInfo; }) || false;
    var _a = react_2["default"].useState(), products = _a[0], setProducts = _a[1];
    var _b = react_2["default"].useState(), likedProducts = _b[0], setLikedProducts = _b[1];
    var _c = react_2["default"].useState(), projects = _c[0], setProjects = _c[1];
    var _d = react_2["default"].useState(false), loading = _d[0], setLoading = _d[1];
    var dispatch = react_redux_1.useDispatch();
    var userId = currentUser === null || currentUser === void 0 ? void 0 : currentUser.sub;
    var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var productResponse, likedProductResponse, projectResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    return [4 /*yield*/, dispatch(thunk_1.fetchProductsByUser(userId))];
                case 1:
                    productResponse = _a.sent();
                    return [4 /*yield*/, dispatch(thunk_1.fetchLikedProductsByUser(userId))];
                case 2:
                    likedProductResponse = _a.sent();
                    return [4 /*yield*/, dispatch(thunk_2.fetchProjectsByUser(userId))];
                case 3:
                    projectResponse = _a.sent();
                    setProducts(productResponse.payload);
                    setProjects(projectResponse.payload);
                    setLikedProducts(likedProductResponse.payload);
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    react_2.useEffect(function () {
        fetchData();
    }, []);
    return (react_2["default"].createElement(react_1.Box, { pt: "90px", px: isDesktop ? "3rem" : 0 },
        react_2["default"].createElement(react_1.Tabs, null,
            react_2["default"].createElement(react_1.TabList, null,
                react_2["default"].createElement(ProfileTab, null, "Designs"),
                react_2["default"].createElement(ProfileTab, null, "Projects"),
                react_2["default"].createElement(ProfileTab, null, "Liked Designs"),
                react_2["default"].createElement(ProfileTab, null, "About")),
            react_2["default"].createElement(react_1.TabPanels, null,
                react_2["default"].createElement(react_1.TabPanel, null,
                    react_2["default"].createElement(DesignTab_1["default"], { products: products, loading: loading })),
                react_2["default"].createElement(react_1.TabPanel, null,
                    react_2["default"].createElement(CollectionTab_1["default"], { projects: projects, loading: loading })),
                react_2["default"].createElement(react_1.TabPanel, null,
                    react_2["default"].createElement(LikedTab_1["default"], { products: likedProducts, loading: loading })),
                react_2["default"].createElement(react_1.TabPanel, null,
                    react_2["default"].createElement(AboutTab_1["default"], null))))));
};
exports["default"] = DesignInfo;
