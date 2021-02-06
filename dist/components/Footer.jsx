"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = __importDefault(require("react"));
exports.Footer = function () {
    return (<react_1.Flex bg='secondary' py={10} px={4}>
      <react_1.Flex direction='column' w='1180px' mx='auto'>
        <react_1.Box>
          <react_1.Link href="/">
            <img src="/reserly-logo.png" alt="uorder" width="120" height="90"/>
          </react_1.Link>
          <react_1.HStack spacing={5} py={4}>
            <react_1.Link fontWeight='500' color='#FFFFFF' fontSize='sm' href='/terminos-y-condiciones'>
              Terminos y condiciones
            </react_1.Link>
            <react_1.Link fontWeight='500' color='#FFFFFF' fontSize='sm' href='/aviso-de-privacidad'>
              Politica de privacidad
            </react_1.Link>
            <react_1.Text fontWeight='500' color='#FFFFFF' fontSize='sm'>
              Contacto: hola@reserly.mx
            </react_1.Text>
          </react_1.HStack>
        </react_1.Box>
        <react_1.Box>
          <react_1.Link target='_blank' fontWeight='500' color='#FFFFFF' fontSize='sm' href='https://www.facebook.com/reserlymx'>
            
            Facebook de Reserly
          </react_1.Link>
        </react_1.Box>
        <react_1.Divider my={6} borderColor='#FFFFFF'/>
        <react_1.Text fontWeight='500' color='#FFFFFF' fontSize='sm'>
          © Reserly. Todos los derechos reservados
        </react_1.Text>
      </react_1.Flex>
    </react_1.Flex>);
};
