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
var react_1 = require("@chakra-ui/react");
var react_2 = require("react");
var CardSlider_1 = require("pages/product-detail/components/CardSlider");
var DrawerModal_1 = require("pages/product-detail/components/DrawerModal");
var DrawerModalShare_1 = require("pages/product-detail/components/DrawerModalShare");
var ListProduct_1 = require("pages/product-detail/components/ListProduct");
var ProductHeader_1 = require("pages/product-detail/components/ProductHeader");
var RightSideButton_1 = require("pages/product-detail/components/RightSideButton");
var react_router_dom_1 = require("react-router-dom");
var network_provider_1 = require("providers/network.provider");
var ProductDetail = function () {
    var _a = react_2["default"].useState(false), isOpenShare = _a[0], setOpenShare = _a[1];
    var _b = react_1.useDisclosure(), isOpen = _b.isOpen, onOpen = _b.onOpen, onClose = _b.onClose;
    var _c = react_2["default"].useState(), product = _c[0], setProduct = _c[1];
    var _d = react_2["default"].useState(false), loading = _d[0], setLoading = _d[1];
    var params = react_router_dom_1.useParams();
    var id = params.id;
    var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    return [4 /*yield*/, network_provider_1.networkProvider.request("/product/details/" + id, {
                            method: "GET"
                        })];
                case 1:
                    response = _a.sent();
                    setProduct(response);
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    react_2.useEffect(function () {
        setTimeout(function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 200);
        fetchData();
    }, []);
    return (react_2["default"].createElement(react_1.Box, { pt: "80px", bg: "white", borderTopLeftRadius: "20px" },
        react_2["default"].createElement(ProductHeader_1.ProductHeader, { product: product, reCall: fetchData }),
        react_2["default"].createElement(CardSlider_1.CardSlider, { product: product }),
        react_2["default"].createElement(RightSideButton_1.RightSideButton, { setOpenShare: function () { return setOpenShare(true); }, openChatModal: function () { return onOpen(); } }),
        react_2["default"].createElement(DrawerModal_1.DrawerModal, { productId: id, isOpen: isOpen, onClose: function () { return onClose(); }, onOpen: function () { return onOpen(); }, setOpenShare: function () {
                setOpenShare(true);
            } }),
        react_2["default"].createElement(DrawerModalShare_1.DrawerModalShare, { isOpen: isOpenShare, onClose: function () {
                setOpenShare(false);
            } }),
        react_2["default"].createElement(ListProduct_1.ListProduct, null)));
};
exports["default"] = ProductDetail;
