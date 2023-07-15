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
var Icon_1 = require("../badge/icon/Icon");
var Text_1 = require("../badge/text/Text");
var BadgeComponent = function (_a) {
    var text = _a.text, source = _a.source;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'nav__link-badge mx-2my-auto flex h-10 w-fit gap-2 rounded-md bg-green-700 px-2 shadow-md transition-all duration-500 ease-in-out hover:bg-green-500 hover:shadow-inner' }, { children: [(0, jsx_runtime_1.jsx)(Icon_1["default"], { source: source }), (0, jsx_runtime_1.jsx)(Text_1["default"], { text: text })] })));
};
exports["default"] = BadgeComponent;
