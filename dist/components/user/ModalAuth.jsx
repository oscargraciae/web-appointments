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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalAuth = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
var LoginForm_1 = require("./LoginForm");
var SignupForm_1 = require("./SignupForm");
var ForgotPasswordForm_1 = require("./ForgotPasswordForm");
var VIEWS = {
    LOGIN: 1,
    SIGNUP: 2,
    FORGOT_PASSWORD: 3
};
exports.ModalAuth = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, onOpen = _a.onOpen, view = _a.view;
    // state
    console.log('View', view);
    var _b = react_1.useState(view || 1), tab = _b[0], setTab = _b[1];
    react_1.useEffect(function () {
        setTab(view || 1);
    }, [view]);
    return (<react_2.Modal isOpen={isOpen} onClose={onClose}>
      <react_2.ModalOverlay />
      <react_2.ModalContent>
        <react_2.ModalCloseButton />
        {VIEWS.LOGIN === tab && <LoginForm_1.LoginForm setTab={setTab} onClose={onClose}/>}
        {VIEWS.SIGNUP === tab && <SignupForm_1.SignupForm setTab={setTab} onClose={onClose}/>}
        {VIEWS.FORGOT_PASSWORD === tab && <ForgotPasswordForm_1.ForgotPasswordForm setTab={setTab} onClose={onClose}/>}
      </react_2.ModalContent>
    </react_2.Modal>);
};
