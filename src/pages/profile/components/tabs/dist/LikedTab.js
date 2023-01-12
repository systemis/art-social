"use strict";
exports.__esModule = true;
var react_1 = require("@chakra-ui/react");
var images_1 = require("assets/images");
var elements_1 = require("components/elements");
var AppTitle_1 = require("components/elements/AppTitle");
var DesignCard_1 = require("components/shared/DesignCard");
var react_2 = require("react");
var bs_1 = require("react-icons/bs");
var react_router_dom_1 = require("react-router-dom");
var DesignTab = function (_a) {
    var products = _a.products, loading = _a.loading;
    var history = react_router_dom_1.useHistory();
    if (loading) {
        return (react_2["default"].createElement(react_1.Center, null,
            react_2["default"].createElement(elements_1.AppCol, { justifyContent: "center", alignItems: "center", height: "400px" },
                react_2["default"].createElement(react_1.Image, { src: images_1.Logo, w: "20vw", mb: "1.5em" }),
                react_2["default"].createElement(AppTitle_1.AppTitle, { fontSize: "30px", my: "0.5em" }, "Explore your designs here \u2764"),
                react_2["default"].createElement(react_1.Text, { fontSize: "15px", color: "#6e6d7a", w: "30vw", textAlign: "center" }, "Click the \"box\" whenever you want to post design"))));
    }
    else {
        return (react_2["default"].createElement(react_1.Box, { display: "flex", flexWrap: "wrap", justifyContent: "center", my: 7 }, products === null || products === void 0 ? void 0 :
            products.map(function (product) {
                return react_2["default"].createElement(DesignCard_1["default"], { key: product._id, listProduct: product });
            }),
            react_2["default"].createElement(react_1.Box, { w: "260px", borderColor: "#e7e7e9", borderWidth: 3, height: "230px", borderStyle: "dashed", borderRadius: ".5em", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", onClick: function () { return history.push("/create/new"); } },
                react_2["default"].createElement(react_1.Icon, { as: bs_1.BsPlusLg, boxSize: 16, color: "#e7e7e9" }))));
    }
};
exports["default"] = DesignTab;
// import { Center } from "@chakra-ui/react";
// import { Logo } from "assets/images";
// import { Image, Text } from "@chakra-ui/react";
// import { AppCol } from "components/elements";
// import { AppTitle } from "components/elements/AppTitle";
// import React from "react";
// const LikedTab = () => {
//   return (
//     <Center>
//       <AppCol justifyContent="center" alignItems="center" height="400px">
//         <Image src={Logo} w="20vw" mb="1.5em" />
//         <AppTitle fontSize="30px" my="0.5em">
//           Save your favourite design ❤
//         </AppTitle>
//         <Text fontSize="15px" color="#6e6d7a" w="30vw" textAlign="center">
//           Click the &quot;❤ liked&quot; button whenever you see a interesting
//           design
//         </Text>
//       </AppCol>
//     </Center>
//   );
// };
// export default LikedTab;
