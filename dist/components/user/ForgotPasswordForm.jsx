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
exports.ForgotPasswordForm = void 0;
var react_1 = require("@chakra-ui/react");
var formik_1 = require("formik");
var react_2 = __importStar(require("react"));
var userService_1 = require("../../services/userService");
var forgotPassword_1 = require("../../validations/forgotPassword");
var AlertError_1 = require("../general/AlertError");
var InputField_1 = require("../InputField");
exports.ForgotPasswordForm = function (_a) {
    var setTab = _a.setTab, onClose = _a.onClose;
    // state
    var _b = react_2.useState(''), error = _b[0], setError = _b[1];
    var _c = react_2.useState(false), success = _c[0], setSuccess = _c[1];
    var onSubmit = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!values.email) return [3 /*break*/, 2];
                    return [4 /*yield*/, new userService_1.UserService().forgotPasword(values)];
                case 1:
                    response = _a.sent();
                    if (response.success) {
                        setSuccess(true);
                        // reloadUser();
                        // onClose();
                    }
                    else {
                        if (response.message) {
                            setError(response.message);
                        }
                    }
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var initalState = {
        email: '',
    };
    return (<>
      <react_1.ModalHeader>Restablece tu contraseña</react_1.ModalHeader>
        <react_1.ModalBody>
          <react_1.Text mb={3}>Te enviaremos un enlace a tu correo para que puedas cambiar la contraseña</react_1.Text>
          <formik_1.Formik initialValues={initalState} onSubmit={onSubmit} validationSchema={forgotPassword_1.forgotSchemaValidation}>
          {function (_a) {
        var isSubmitting = _a.isSubmitting, errors = _a.errors, touched = _a.touched;
        return (<formik_1.Form>
            <react_1.VStack spacing={4}>
              <InputField_1.InputField inputSize='lg' name='email' label='Correo eletrónico'/>
              <react_1.Button mt={40} isLoading={isSubmitting} type='submit' size='lg' variant='primary' isFullWidth>Cambiar mi contraseña</react_1.Button>
              <react_1.Button alignSelf='flex-end' textAlign='right' size='sm' variant='link' onClick={function () { return setTab(1); }}>Regresar a iniciar sesión</react_1.Button>
              {error && <AlertError_1.AlertError description={error}/>}
              {success && <react_1.Alert status='success'>
                <react_1.AlertDescription>
                  Te hemos enviado un correo con las instrucciones para cambiar tu contraseña.
                  *Si no logras encontrarlo, revisa tu bandeja de spam.
                </react_1.AlertDescription>
              </react_1.Alert>}
            
              <react_1.Divider orientation='horizontal' my={4}/>
              <react_1.Text mb={2}>¿No tienes cuenta?{" "}
                <react_1.Link color='primary' fontWeight='bold' onClick={function () { return setTab(2); }}>Registrate</react_1.Link>
              </react_1.Text>
            </react_1.VStack>
          </formik_1.Form>);
    }}
      </formik_1.Formik>
    </react_1.ModalBody>
    </>);
};
