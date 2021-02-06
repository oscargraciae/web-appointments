"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
var Header_1 = __importDefault(require("./Header"));
var ModalAuth_1 = require("./user/ModalAuth");
var Footer_1 = require("./Footer");
exports.Layout = function (_a) {
    var children = _a.children;
    var _b = react_2.useDisclosure(), isOpen = _b.isOpen, onClose = _b.onClose, onOpen = _b.onOpen;
    var _c = react_1.useState(), authView = _c[0], setauthView = _c[1];
    var handleAuthModal = function (view) {
        setauthView(view);
        onOpen();
    };
    return (<>
      {authView && <ModalAuth_1.ModalAuth isOpen={isOpen} onClose={onClose} onOpen={onOpen} view={authView}/>}
      <Header_1.default handleAuthModal={handleAuthModal}/>
      
      <react_2.Box>
        {children}
      </react_2.Box>
      <Footer_1.Footer />
    </>);
};
