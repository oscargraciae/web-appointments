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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSideProps = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
var router_1 = require("next/router");
var formik_1 = require("formik");
var InputField_1 = require("../components/InputField");
var AlertError_1 = require("../components/general/AlertError");
var Wrapper_1 = require("../components/Wrapper");
var userService_1 = require("../services/userService");
var changePassword_1 = require("../validations/changePassword");
exports.getServerSideProps = function (_a) {
    var query = _a.query;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            return [2 /*return*/, {
                    props: __assign({}, query),
                }];
        });
    });
};
var ChangePassword = function (_a) {
    var token = _a.token;
    var router = router_1.useRouter();
    var toast = react_2.useToast();
    var _b = react_1.useState(''), error = _b[0], setError = _b[1];
    var _c = react_1.useState(false), success = _c[0], setSuccess = _c[1];
    // const [isLoading, setIsLoading] = useState(false);
    // const [password, setPassword] = useState('');
    var onSubmit = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(values.password === values.confirmPassword)) return [3 /*break*/, 2];
                    return [4 /*yield*/, new userService_1.UserService().changePasword({ token: token, password: values.password })];
                case 1:
                    response = _a.sent();
                    if (response.success) {
                        toast({
                            status: 'success',
                            title: 'Contraseña actualizada',
                            position: 'top',
                        });
                        // setSuccess(true);
                        router.push('/');
                    }
                    else {
                        setError(response.message);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    setError('Las contraseñas no coinciden');
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var initialState = {
        password: '',
        confirmPassword: '',
    };
    return (<Wrapper_1.Wrapper variant='small'>
      <react_2.Box h='100vh'>
        <react_2.Heading mb={6}>Cambiar contraseña</react_2.Heading>
          <formik_1.Formik initialValues={initialState} onSubmit={onSubmit} validationSchema={changePassword_1.changePasswordSchemaValidation}>
            {function (_a) {
        var isSubmitting = _a.isSubmitting, errors = _a.errors, touched = _a.touched;
        return (<formik_1.Form>
              <react_2.VStack spacing={4}>
                <InputField_1.PasswordInputField inputSize='lg' name='password' label='Nueva contraseña'/>
                <InputField_1.PasswordInputField inputSize='lg' name='confirmPassword' label='Confirmar nueva contraseña'/>
                <react_2.Button mt={40} isLoading={isSubmitting} type='submit' size='lg' variant='primary' isFullWidth>Cambiar mi contraseña</react_2.Button>
                {error && <AlertError_1.AlertError description={error}/>}
                
              </react_2.VStack>
            </formik_1.Form>);
    }}
        </formik_1.Formik>
      </react_2.Box>
    </Wrapper_1.Wrapper>);
};
exports.default = ChangePassword;
