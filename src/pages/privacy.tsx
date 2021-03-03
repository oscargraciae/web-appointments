import React from 'react'
import NextHead from 'next/head';
import { Flex, Heading, VStack, Text, Box, OrderedList, ListItem } from '@chakra-ui/react';
import { Wrapper } from '../components/Wrapper';

const Privacy: React.FC = () => {
  return (
    <Wrapper>
      <NextHead>
        <title>Reserly - Política de Privacidad</title>
      </NextHead>
      <Flex justify="center" align="center" w="960px" bgSize="cover" direction='column' mx='auto'>
        <Heading w='100%' textAlign='center' pb={14} mb={14} mt={4} borderBottomWidth={1} borderColor='borders'>Política de Privacidad</Heading>
        <VStack alignItems='flex-start' spacing={10} mb={14}>
          <Text fontWeight='bold' mb={3} fontSize='xl'>Última actualización: Febrero de 2021</Text>
          <Box>
            <Text color='subtext' lineHeight='26px'>
            De conformidad en lo dispuesto por la Ley Federal de Protección de Datos
            Personales en Posesión de Particulares, se emite el presente Aviso de
            Privacidad en los siguientes términos:

            </Text>
          </Box>

          <Box>
            <Text color='subtext' lineHeight='26px'>
            <strong>INFORMACIÓN A RECABAR.</strong> Hacemos de su conocimiento que CHAMBITA
              LABS, S. A. P. I. de C. V., podrá recopilar sus datos personales,
              incluyendo datos personales sensibles, a través de diferentes fuentes,
              entre ellas:

            </Text>
          </Box>
          
          <Box>
            <Text color='subtext' lineHeight='26px'>
            <OrderedList>
              <ListItem>
                <strong>Directamente:</strong> Cuando usted solicita o adquiera cualquiera de los
                servicios proporcionados por CHAMBITA LABS, S. A. P. I. de C. V.
              </ListItem>
              <ListItem>
                <strong>Indirecta:</strong> De cualquier otra fuente de información
                comercialmente disponible.
                
                La manera en como recabamos su información, puede combinarse
                para ayudarnos en el ofrecimiento, prestación y/o mejora de
                nuestros servicios. A continuación se presentan ejemplos de datos
                que se solicitan: nombre, sexo, dirección, teléfonos de contacto
                (casa, oficina y celular), correo electrónico, edad, fecha de
                nacimiento, referencias personales, ocupación, nacionalidad, país
                de nacimiento, estado civil, constancia Única de Registro de
                Población, Registro Federal de Contribuyentes, Número de serie de
                la Firma Electrónica Avanzada, nombre de la empresa donde ha
                laborado, puesto, Número de Seguridad Social, escolaridad, sector,
                puesto/ocupación, domicilio laboral en México información
                financiera, bancaria, entre otros.
              </ListItem>
            </OrderedList>

            </Text>
          </Box>
          
          <Box>
            <Text fontWeight='bold' mb={3} fontSize='xl'>FINALIDADES A QUE SE SUJETARA EL TRATAMIENTO DE DATOS PERSONALES.</Text>
            <Text color='subtext' lineHeight='26px'>
            El Tratamiento de datos personales del titular, incluyendo los datos personales sensibles que en su caso lleguemos a recabar, y salvo que el titular disponga lo contrario mediante el medio descrito en el presente Aviso de Privacidad, tiene como finalidad, el desarrollo de nuevos productos y servicios, asesoría, comercialización, promoción, contratación y colocación de todo tipo de servicios o productos contratados por usted o la empresa que representa y otras
            obligaciones derivadas de cualquier relación jurídica entre el titular de datos personales y <strong>CHAMBITA LABS, S. A. P. I. de C. V.</strong> Así mismo para:

            </Text>
          </Box>
        
          <Box>
            <Text fontWeight='bold' mb={3} fontSize='xl'>Solicitudes de Consumidores.</Text>
            <Text color='subtext' lineHeight='26px' mb={3}>
              Los “Usuarios” que sean Consumidores para los efectos a que se refiere la Ley Federal de Protección al Consumidor, podrán usar este sitio para solicitar presupuestos a los “Usuarios” registrados en el presente sitio como Proveedores; expresando el servicio deseado con la descripción más detallada posible, pudiendo incluir, de manera enunciativa y no limitativa, fotografías, gráficos, así como los demás datos pertinentes para que su solicitud sea atendida debidamente.  Queda expresamente prohibido formular solicitudes publicando datos personales o de contacto, ni medios de pago distintos a los autorizados por "Reserly".  Cualquier solicitud  de servicio de un “Usuario” Consumidor que se publique en este sitio deberá limitarse a los servicios expresamente publicados por los “Usuarios” Proveedores que también usen el presente sitio.
            </Text>
            <Text color='subtext' lineHeight='26px'>
              <OrderedList>
                <ListItem>
                  Hacer de su conocimiento, la gama de nuevos productos y
                  servicios, así como beneficios, descuentos, promociones, estudios de mercado, sobre cambio en condiciones y en general toda la publicidad derivada de los servicios que ofrece CHAMBITA LABS, S. A. P. I. de C. V.
                </ListItem>
                <ListItem>
                  Análisis de uso de nuestros productos y servicios.
                </ListItem>
                <ListItem>
                  Para el cumplimiento de nuestros términos y condiciones en la
                  prestación de nuestros servicios.
                </ListItem>
                <ListItem>
                  Los datos sensibles que se pudieran recabar, podrán ser
                  utilizados para la identificación de riesgo en la contratación y diseño de nuestro sitio web.
                </ListItem>
              </OrderedList>

            </Text>
          </Box>
        
          <Box>
            <Text fontWeight='bold' mb={3} fontSize='xl'>OPCIONES Y MEDIOS QUE CHAMBITA LABS, S. A. P. I. de C. V., OFRECE A LOS TITULARES DE DATOS PERSONALES PARA LIMITAR EL USO O DIVULGACIÓN DE SU INFORMACIÓN.</Text>
            <Text color='subtext' lineHeight='26px'>
              Los datos personales del titular, serán mantenidos en estricta confidencialidad, de conformidad con las medidas de seguridad, administrativas, técnicas y físicas que al efecto CHAMBITA LABS, S. A. P. I. de C. V., implemente en sus políticas y procedimientos de seguridad, quedando prohibido su divulgación ilícita y limitando su uso a terceros, conforme a lo previsto en el presente Aviso de Privacidad.
            </Text>
          </Box>
        
          <Box>
            <Text fontWeight='bold' mb={3} fontSize='xl'>MEDIOS PARA EL EJERCICIO DE DERECHOS DEL TITULAR.</Text>
            <Text color='subtext' lineHeight='26px'>
              El titular de datos personales, podrá ejercer sus derechos de acceso, rectificación, cancelación, oposición, limitación de uso, divulgación o revocación, enviando un escrito que cumpla con las formalidades de la Ley por correo a la siguiente, dirección: ayuda@reserly.mx.
            </Text>
          </Box>
        
          {/* <Box>
            <Text fontWeight='bold' mb={3} fontSize='xl'>Derecho a Remediar y Amigable Composición.</Text>
            <Text color='subtext' lineHeight='26px'>
              Cualquier “Usuario” que estime lesionados sus derechos, ya sea como Proveedor o Consumidor, deberá notificar mediante este mismo sitio a "Reserly", previo a dar por terminado el servicio (haciendo Click en el botón de Terminar), la inconformidad o lesión que estime sufrida, el nombre del “Usuario” que haya producido la lesión o agravio, y el remedio solicitado para la eventualidad sufrida.  Al efecto, "Reserly" notificará al “Usuario” a quien se imputa la lesión de derechos o agravio para que este último subsane o remedie la situación afectada dentro de un lapso de 30 días naturales.  En el evento de que el “Usuario” que reciba la petición para remediar no responda en diez días naturales o de que no remedie la reclamación en ese mismo lapso, o no se someta  a la amigable composición a que se alude en este párrafo; "Reserly" efectuará el reembolso de lo que se haya pagado por el “Usuario” inconforme dentro de los cinco días hábiles bancarios siguientes a la expiración del plazo para remediar, menos la Comisión y las contribuciones que, en su caso, resulten aplicables.  Reserly, por conducto de la persona física que libremente designe, podrá actuar como amigable componedor entre el “Usuario” afectado y el “Usuario” a quien se imputa el agravio, procurando en todo momento la conciliación y las sanas relaciones entre los “Usuarios”, sin perjuicio de que, vencidos los 30 días antes mencionados, el “Usuario” afectado haga valer sus derechos en la vía y forma legal que corresponda, siempre en el entendido de que Reserly es un sitio para facilitar el encuentro virtual entre “Usuarios”, pero que la primeramente mencionada no presta ni prestará los servicios ofrecidos por los “Usuarios” proveedores, por lo que la responsabilidad por los servicios en todo caso corresponderá a estos últimos.  En ningún caso, Reserly asumirá responsabilidad ninguna por los servicios contratados por los “Usuarios” dentro y fuera de este sitio.
            </Text>
          </Box> */}
        
          {/* <Box>
            <Text fontWeight='bold' mb={3} fontSize='xl'>Tarifas.</Text>
            <Text color='subtext' lineHeight='26px'>
              El registro en "Reserly" es gratuito.  Al momento de solicitar un servicio, "Reserly" publicará el precio exigible, que incluye la contraprestación a favor del “Usuario” Proveedor, y una Comisión que puede variar de tiempo en tiempo, dependiendo del monto de la operación y del medio de pago.  La Comisión publicada en cada presupuesto corresponde a los servicios prestados por este espacio virtual para facilitar el contacto entre los “Usuarios” pero nunca, bajo ningún concepto, la Comisión amparará los servicios que sean prestados por el “Usuario” Proveedor.  Amén de la factura que resultara exigible al “Usuario” Proveedor, "Reserly" expedirá una factura por la Comisión cargada al “Usuario” Consumidor, siempre que este último la solicite expresamente por medio del sitio, indicando los datos que las leyes fiscales exigen para expedir comprobantes fiscales.  La contraprestación a cada “Usuario” Proveedor será cubierta cinco días hábiles bancarios después de que tanto el “Usuario” Proveedor y el respectivo “Usuario” Consumidor hayan manifestado su conformidad con la terminación del servicio prestado, mediante el botón para finalizar la transacción que al efecto inserte "Reserly" en la transacción efectuada entre los dos primeramente mencionados.
            </Text>
          </Box> */}
        
          <Box>
            <Text fontWeight='bold' mb={3} fontSize='xl'>TRANSFERENCIA DE DATOS PERSONALES.</Text>
            <Text color='subtext' lineHeight='26px'>
              En este sentido, CHAMBITA LABS, S. A. P. I. de C. V., podrá realizar la transferencia de datos, por lo que solicita su consentimiento expreso para transferirlos a:
            </Text>
          </Box>
        
          <Box>
            <Text fontWeight='bold' mb={3} fontSize='xl'>Enlaces.</Text>
            <Text color='subtext' lineHeight='26px'>
              Este sitio contiene enlaces a servidores de terceros, mismos que no son propiedad ni están bajo el dominio, control, posesión ni propiedad de "Reserly", por lo que no seremos responsables por los contenidos, acciones, materiales ni servicios prestados por tales servidores, amén de que tales enlaces no representan ni constituyen relación de sociedad, aprobación ni respaldo de "Reserly" a los contenidos de los servidores antes referidos.
            </Text>
            <Text color='subtext' lineHeight='26px'>
              <OrderedList>
                <ListItem>
                  Las empresas filiales y socios comerciales de CHAMBITA LABS, S. A. P. I. de C. V., a nivel nacional.
                </ListItem>
                <ListItem>
                  Terceros proveedores de servicios para el cumplimiento de las obligaciones legales adquiridas por CHAMBITA LABS, S. A. P. I. de C. V., o por cualquiera de las empresas filiales. Incluyendo los proveedores de servicios de investigación, análisis de datos, envío de información enfocada a las necesidades del titular de datos personales, así como en la realización de otros servicios necesarios o requeridos por el titular de datos personales. Los terceros y las entidades receptores de datos personales, asumen las mismas obligaciones y/o responsabilidades de CHAMBITA LABS, S. A. P. I. de C. V., de conformidad con lo descrito en el presente Aviso de Privacidad. El titular de datos personales que presenta cualquier solicitud para entablar una relación jurídica con CHAMBITA LABS, S. A. P. I. de C. V., acepta la transferencia de sus datos personales, en los términos descritos en el presente Aviso de Privacidad.
                  <strong>CAMBIOS AL AVISO DE PRIVACIDAD.</strong> Cualquier cambio al presente aviso de privacidad, le será informado a través de cualquiera de los siguientes medios:
                </ListItem>
              </OrderedList>

            </Text>
          </Box>
        
          <Box>
            <Text color='subtext' lineHeight='26px' mb={3}>
              Avisos en el portal de Internet de <strong>CHAMBITA LABS, S. A. P. I. de C. V.</strong> Los datos que se recaban por este medio, serán tratados conforme a las disposiciones previstas en la Ley Federal de Protección de Datos Personales en Posesión de Particulares y su Reglamento. La confidencialidad de estos datos está garantizada y protegida para evitar su uso o divulgación indebida.
            </Text>
            <Text color='subtext' lineHeight='26px' mb={3}>
              Para cualquier aclaración o duda por favor contacte al Departamento de Atención a “Usuarios” al correo: ayuda@reserly.mx
            </Text>
            <Text color='subtext' lineHeight='26px' mb={3}>
              De conformidad con el Artículo 91 del Reglamento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y de nuestro aviso de privacidad aquí reproducido, CHAMBITA LABS, S. A. P. I. de C. V.. pone a disposición de sus asegurados y del público en general, para atender las solicitudes para el ejercicio de los derechos ARCO respetando los plazos legales establecidos por el artículo 32 de la Ley Federal de Datos Personales en Posesión de los Particulares, siempre que la identidad del titular sea acreditada para tales efectos. Para efectos de rectificación, cancelación, oposición, revocación del consentimiento y limitaciones de usos personales sirva usted llenar el siguiente formato de solicitud: <a href="terms-arco">DERECHOS ARCO</a>
            </Text>

          </Box>
        
        </VStack>
      </Flex>
    </Wrapper>
  );
}

export default Privacy;