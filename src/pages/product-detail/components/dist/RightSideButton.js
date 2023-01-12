"use strict";
exports.__esModule = true;
exports.RightSideButton = void 0;
var react_1 = require("react");
var react_2 = require("@chakra-ui/react");
var bs_1 = require("react-icons/bs");
var ri_1 = require("react-icons/ri");
var ai_1 = require("react-icons/ai");
exports.RightSideButton = function (props) {
    var btnRef = react_1["default"].useRef(null);
    return (react_1["default"].createElement(react_2.Stack, { position: 'fixed', zIndex: '4', top: { md: '200px', lg: '200px' }, direction: ['column'], right: { md: '40px', lg: '60px' }, spacing: '24px' },
        react_1["default"].createElement(react_2.Button, { w: '40px', height: '40px', ref: btnRef, onClick: function () { return props.openChatModal(); }, color: 'black', bg: '#dcdcdc', _hover: {
                bg: '#c0c0c0'
            } },
            react_1["default"].createElement(react_2.Center, null,
                react_1["default"].createElement(bs_1.BsFillChatFill, { size: "20px" }))),
        react_1["default"].createElement(react_2.Button, { w: '40px', height: '40px', ref: btnRef, onClick: function () {
                props.setOpenShare();
            }, 
            // href={'#'}
            color: 'black', bg: '#dcdcdc', _hover: {
                bg: '#c0c0c0'
            } },
            react_1["default"].createElement(react_2.Center, null,
                react_1["default"].createElement(ri_1.RiShareForwardFill, { size: "25px" }))),
        react_1["default"].createElement(react_2.Button, { w: '40px', height: '40px', ref: btnRef, 
            //onClick={onOpen}
            // href={'#'}
            color: 'black', bg: '#dcdcdc', _hover: {
                bg: '#c0c0c0'
            } },
            react_1["default"].createElement(react_2.Center, null,
                react_1["default"].createElement(ai_1.AiFillFolderAdd, { size: "25px" })))));
};
