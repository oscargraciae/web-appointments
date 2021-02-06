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
var react_1 = require("@chakra-ui/react");
var react_2 = __importStar(require("react"));
var BusinessItem_1 = require("./BusinessItem");
var exploreContext_1 = require("../../context/exploreContext");
var LoadingView_1 = require("../general/LoadingView");
var BusinessList = function (_a) {
    var _b = react_2.useContext(exploreContext_1.ExploreContext), businesses = _b.businesses, isLoading = _b.isLoading;
    if (isLoading) {
        return <LoadingView_1.LoadingView />;
    }
    if (!businesses || businesses.length === 0) {
        return (<react_1.Box py={4} px={4} textAlign='center'>
        <react_1.Text fontSize='lg' fontWeight='bold'>No hay negocios en esta zona.</react_1.Text>
        <react_1.Text fontSize='sm'>Lo sentimos, estamos trabajando para traer más negocios.</react_1.Text>
      </react_1.Box>);
    }
    return (<react_1.Box py={4} minH='100vh'>
      {businesses.map(function (business) { return (<BusinessItem_1.BusinessItem key={business.id} business={business}/>); })}      
    </react_1.Box>);
};
exports.default = BusinessList;
