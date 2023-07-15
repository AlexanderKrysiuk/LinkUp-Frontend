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
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./App.css");
var image_regular_svg_1 = require("./assets/image-regular.svg");
var react_svg_1 = require("./assets/react.svg");
var Badge_1 = require("./components/navbar/badge/Badge");
var vite_svg_1 = require("/vite.svg");
// import imageIcon from './assets/image-regular.svg';
// import reactLogo from './assets/react.svg';
function App() {
    var _a = (0, react_1.useState)(0), count = _a[0], setCount = _a[1];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Badge_1["default"], { text: 'sample', source: image_regular_svg_1["default"] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("a", __assign({ href: 'https://vitejs.dev', target: '_blank' }, { children: (0, jsx_runtime_1.jsx)("img", { src: vite_svg_1["default"], className: 'logo', alt: 'Vite logo' }) })), (0, jsx_runtime_1.jsx)("a", __assign({ href: 'https://react.dev', target: '_blank' }, { children: (0, jsx_runtime_1.jsx)("img", { src: react_svg_1["default"], className: 'logo react', alt: 'React logo' }) }))] }), (0, jsx_runtime_1.jsx)("h1", { children: "Vite + React" }), (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'card' }, { children: [(0, jsx_runtime_1.jsxs)("button", __assign({ onClick: function () { return setCount(function (count) { return count + 1; }); } }, { children: ["count is ", count] })), (0, jsx_runtime_1.jsxs)("p", { children: ["Edit ", (0, jsx_runtime_1.jsx)("code", { children: "src/App.tsx" }), " and save to test HMR"] })] })), (0, jsx_runtime_1.jsx)("p", __assign({ className: 'read-the-docs' }, { children: "Click on the Vite and React logos to learn more" }))] }));
}
exports["default"] = App;
