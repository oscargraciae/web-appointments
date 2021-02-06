"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@chakra-ui/react");
var Wrapper_1 = require("../components/Wrapper");
var BusinessLanding = function (_a) {
    return (<react_2.Flex justify="center" align="center" w="100%" bgSize="cover" direction='column'>
      <react_2.Flex direction='column' w='100%' h='340px' alignItems='center' justifyContent='center' bg='linear-gradient(90deg,rgba(47,45,65,.7),rgba(47,45,65,.7)),url(/bg-negocios.jpg);' bgSize='cover' bgRepeat='no-repeat'>
        <react_2.Text mx='auto' width="800px" mt={2} fontSize="4xl" fontWeight="bold" lineHeight="short" textAlign='center' color='#FFF' zIndex={20}>
          Recibe reservaciones online y gestiona la agenda de tu negocio.
        </react_2.Text>
        <react_2.Text mx='auto' pt={3} width="800px" fontWeight='semibold' fontSize="sm" textAlign='center' color='#FFF' zIndex={20}>
          Gratis. Disponible las 24 horas. Más clientes. Menos distracciones.
        </react_2.Text>
        <react_2.Link variant='primary-solid' mt={6} href={process.env.NEXT_PUBLIC_MANAGER_URL + "/"}>
          REGISTRA TU NEGOCIO GRATIS
        </react_2.Link>
      </react_2.Flex>
      
      <Wrapper_1.Wrapper>
        <react_2.Flex direction='column' justifyContent='center' alignItems='center' maxW='70%' mx='auto' my={12}>
          <react_2.Heading mb={4}>La mejor forma de gestionar reservas</react_2.Heading>
          <react_2.Text textAlign='center' my={4} fontSize='lg'>
            Administra tu tiempo y el de tus clientes. Con Reserly podrás recibir reservaciones online, enviar recordatorios de citas, exponerte a más personas gracias a nuestro portal para clientes y mucho más. <strong>Servicio gratuito.</strong>
          </react_2.Text>
        </react_2.Flex>

        <react_2.Divider my={20}/>

        <react_2.Flex direction='row' justifyContent='space-between' mb={20}>
          <react_2.SimpleGrid columns={2} spacing={6} ml={6} w='42%'>
            <react_2.Box>
              <react_2.HStack alignItems='center'>
                <react_2.Text fontWeight='bold' fontSize='lg'>Calendario</react_2.Text>
              </react_2.HStack>
              <react_2.Text color='subtext'>Visualiza todas tus citas de forma clara y organizada, con el calendario de Reserly ten tus reservas en un solo lugar.</react_2.Text>
            </react_2.Box>
            <react_2.Box>
              <react_2.HStack alignItems='center'>
                <react_2.Text fontWeight='bold' fontSize='lg'>Notificaciones</react_2.Text>
              </react_2.HStack>
              <react_2.Text color='subtext'>Reserly te enviará notificaciones para avisarte de una nueva reservación.</react_2.Text>
            </react_2.Box>

            <react_2.Box>
              <react_2.HStack alignItems='center'>
                <react_2.Text fontWeight='bold' fontSize='lg'>Reservaciones online 24/7</react_2.Text>
              </react_2.HStack>
              <react_2.Text color='subtext'>Somos tu asistente personal. La gente puede realizar reservaciones 24/7 y sin interverveciones incluso cuando tu negocio está cerrado.</react_2.Text>
            </react_2.Box>

            <react_2.Box>
              <react_2.HStack alignItems='center'>
                <react_2.Text fontWeight='bold' fontSize='lg'>Aplicación movil</react_2.Text>
              </react_2.HStack>
              <react_2.Text color='subtext'>Con la aplicación móvil de Reserly podras ver y controlar las reservaciones de tu negocio las 24 horas del día.</react_2.Text>
            </react_2.Box>
          </react_2.SimpleGrid>
          <react_2.Image src='/agenda-landing.png' w='53%'/>
        </react_2.Flex>

        <react_2.Flex direction='column' justifyContent='center' alignItems='center' maxW='50%' mx='auto' my={12} bg='primaryLight' p={10} borderRadius={3}>
          <react_2.Text fontWeight='bold' fontSize='2xl' color='secondary'>Comienza ahora creando tu cuenta gratis.</react_2.Text>
          <react_2.Link variant='primary-solid' mt={6} href={process.env.NEXT_PUBLIC_MANAGER_URL + "/"}>
            ÚNETE A RESERLY
          </react_2.Link>
        </react_2.Flex>
        
      </Wrapper_1.Wrapper>

    </react_2.Flex>);
};
exports.default = BusinessLanding;
