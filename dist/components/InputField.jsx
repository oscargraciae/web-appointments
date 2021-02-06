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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputNumberField = exports.PasswordInputField = exports.TextareaField = exports.InputField = void 0;
var react_1 = __importStar(require("react"));
var formik_1 = require("formik");
var react_2 = require("@chakra-ui/react");
var ai_1 = require("react-icons/ai");
// type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
//   label: string,
//   name: string,
//   errors?: string
//   inputSize?: string
// }
exports.InputField = function (_a) {
    var label = _a.label, errors = _a.errors, _b = _a.inputSize, inputSize = _b === void 0 ? 'md' : _b, props = __rest(_a, ["label", "errors", "inputSize"]);
    var _c = formik_1.useField(props), field = _c[0], _d = _c[1], error = _d.error, touched = _d.touched;
    return (<react_2.FormControl isInvalid={!!(touched && error)}>
      <react_2.FormLabel fontWeight='bold' fontSize='sm' htmlFor={field.name}>{label}</react_2.FormLabel>
      <react_2.Input size={inputSize} {...field} {...props} id={field.name}/>
      {(touched && error) ? <react_2.FormErrorMessage>{error}</react_2.FormErrorMessage> : null}
    </react_2.FormControl>);
};
exports.TextareaField = function (_a) {
    var label = _a.label, errors = _a.errors, _b = _a.inputSize, inputSize = _b === void 0 ? 'md' : _b, props = __rest(_a, ["label", "errors", "inputSize"]);
    var _c = formik_1.useField(props), field = _c[0], _d = _c[1], error = _d.error, touched = _d.touched;
    return (<react_2.FormControl isInvalid={!!(touched && error)}>
      <react_2.FormLabel fontWeight='bold' fontSize='sm' htmlFor={field.name}>{label}</react_2.FormLabel>
      <react_2.Textarea size={inputSize} {...field} {...props} id={field.name}/>
      {(touched && error) ? <react_2.FormErrorMessage>{error}</react_2.FormErrorMessage> : null}
    </react_2.FormControl>);
};
exports.PasswordInputField = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'Contraseña' : _b, props = __rest(_a, ["label"]);
    var _c = formik_1.useField(props), field = _c[0], _d = _c[1], error = _d.error, touched = _d.touched;
    var _e = react_1.useState(false), showPassword = _e[0], setShowPassword = _e[1];
    return (<react_2.FormControl isInvalid={!!(touched && error)}>
      <react_2.FormLabel htmlFor="description" fontSize='sm' fontWeight='bold'>{label}</react_2.FormLabel>
      <react_2.InputGroup>
        <react_2.Input type={showPassword ? "text" : "password"} {...field} {...props} id={field.name}/>
        <react_2.InputRightElement>
          <react_2.IconButton aria-label="Search database" variant='ghost' icon={!showPassword ? ai_1.AiFillEye({}) : ai_1.AiFillEyeInvisible({})} onClick={function () { return setShowPassword(!showPassword); }}/>
        </react_2.InputRightElement>
      </react_2.InputGroup>
      {(touched && error) ? <react_2.FormErrorMessage>{error}</react_2.FormErrorMessage> : null}
    </react_2.FormControl>);
};
exports.InputNumberField = function (_a) {
    var label = _a.label, errors = _a.errors, _b = _a.inputSize, inputSize = _b === void 0 ? 'md' : _b, props = __rest(_a, ["label", "errors", "inputSize"]);
    var _c = formik_1.useField(props), field = _c[0], _d = _c[1], error = _d.error, touched = _d.touched;
    return (<react_2.FormControl isInvalid={!!(touched && error)}>
      <react_2.FormLabel fontWeight='bold' fontSize='sm' htmlFor={field.name}>{label}</react_2.FormLabel>
      <react_2.NumberInput precision={0}>
        <react_2.NumberInputField {...field} {...props} id={field.name}/>
      </react_2.NumberInput>
      {(touched && error) ? <react_2.FormErrorMessage>{error}</react_2.FormErrorMessage> : null}
    </react_2.FormControl>);
};
