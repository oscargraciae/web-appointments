import React from 'react'
import NextHead from 'next/head';
import { Flex, Heading, VStack, Text, Box } from '@chakra-ui/react';
import { Wrapper } from '../components/Wrapper';

const Terms: React.FC = () => {
  return (
    <Wrapper>
      <NextHead>
        <title>Reserly - Terminos y condiciones</title>
      </NextHead>
      <Flex justify="center" align="center" w="960px" bgSize="cover" direction='column' mx='auto'>
        <Heading w='100%' textAlign='center' pb={14} mb={14} mt={4} borderBottomWidth={1} borderColor='borders'>Terminos y condiciones</Heading>
        <VStack alignItems='flex-start' spacing={10} mb={14}>
          <Text fontWeight='bold' mb={3} fontSize='xl'>Última actualización: Febrero de 2021</Text>
          <Box>
            <Text color='subtext' lineHeight='26px'>
            Chambita Labs, S. A. P. I. de C. V., (en delante Reserly) le ofrece funciones de publicidad, información y contacto entre proveedores y consumidores(en delante “Usuarios” y, en singular, “Usuario”) para contratar servicios.  Al usar este sitio, Usted consiente las presentes Condiciones y Términos de Uso (en delante, las “Condiciones”).  Al usar en cualquier forma este sitio, Usted expresa su consentimiento con las presentes “Condiciones” conforme a lo previsto en la fracción II del artículo 1803, del Código Civil Federal, y sus correlativos de las entidades federativas de los Estados Unidos Mexicanos.  Si Usted no acepta estas “Condiciones”, en todo o en parte, no existirá ningún acuerdo, de ninguna especie, entre Usted y Reserly.
            Sus datos personales y sus derechos <a href="terms-arco">ARCO</a> se tratan conforme al Aviso de Privacidad que se encuentra publicado en este mismo sitio, el cual Usted debe aceptar por separado, pues también rige las presentes “Condiciones”.
            </Text>
          </Box>

          <Box>
            <Text fontWeight='bold' mb={3} fontSize='xl'>Uso del Sitio.</Text>
            <Text color='subtext' lineHeight='26px'>
              Cualquier persona con capacidad legal para contratar y obligarse puede usar el sitio de "Reserly".  El registro en este sitio no tiene ningún costo, pero Usted no podrá usarlo si es menor de edad conforme a la ley aplicable, si es incapaz para efectos de Derecho; si está inhabilitado para ejercer el comercio en cualquier forma prevista por las leyes; o si está exceptuado en cualquier forma prevista por las leyes.  Tampoco pueden usar el sitio de "Reserly" los usuarios cuya cuenta haya sido suspendida o cancelada, ni por sí ni mediante interpósita persona.  Tratándose de personas morales, el sitio solo podrá ser usado por una persona física con capacidad para representar y obligar a la persona moral de que se trate.
            </Text>
          </Box>
          
          <Box>
            <Text fontWeight='bold' mb={3} fontSize='xl'>Su Cuenta.</Text>
            <Text color='subtext' lineHeight='26px'>
              Para usar este Sitio, usted debe abrir una Cuenta, con una contraseña personal elegida libremente por Usted, ya sea como Proveedor o como Consumidor, proporcionando los datos personales para registrar su Cuenta en forma verídica, completa y exacta, según sean solicitados en el Formulario de Registro.  "Reserly" podrá –en cualquier momento- solicitarle información o documentación para corroborar la exactitud y veracidad de los datos con los que Usted registró su Cuenta y, en caso de falsedad, o de que un Usuario tenga más de una Cuenta, o de que su Cuenta sea usada con fines ilícitos, delictuosos o en cualquiera manera contraria a la moral, a las buenas costumbres o al Derecho, o en contravención a las presentes “Condiciones”, podremos cancelar o suspender su Cuenta, dando de baja todas sus solicitudes, cotizaciones o cualquier información o petición de servicio que Usted haya proporcionado mediante este sitio, sin responsabilidad alguna para "Reserly".  Dado que con su Cuenta Usted asume obligaciones para con terceros, su Cuenta es personal, intransferible y no puede cederse a ningún tercero sin el consentimiento previo y por escrito de "Reserly".  En todo caso, "Reserly" se reserva el derecho de aceptar o rechazar el registro de cada Cuenta, sin necesidad de notificar al Usuario los motivos del eventual rechazo.
            </Text>
          </Box>
          
          <Box>
            <Text fontWeight='bold' mb={3} fontSize='xl'>Modificaciones a las “Condiciones”.</Text>
            <Text color='subtext' lineHeight='26px'>
              "Reserly" se reserva el derecho de modificar de tiempo en tiempo las presentes “Condiciones”, para lo cual hará del conocimiento de los Usuarios del sitio las modificaciones, en el entendido de que si Usted no cancela su Cuenta en un lapso de 5 días naturales siguientes a la fecha de modificación de las “Condiciones”, estará aceptando las modificaciones publicadas.
            </Text>
          </Box>
        
          <Box>
            <Text fontWeight='bold' mb={3} fontSize='xl'>Solicitudes de Consumidores.</Text>
            <Text color='subtext' lineHeight='26px'>
              Los “Usuarios” que sean Consumidores para los efectos a que se refiere la Ley Federal de Protección al Consumidor, podrán usar este sitio para solicitar presupuestos a los “Usuarios” registrados en el presente sitio como Proveedores; expresando el servicio deseado con la descripción más detallada posible, pudiendo incluir, de manera enunciativa y no limitativa, fotografías, gráficos, así como los demás datos pertinentes para que su solicitud sea atendida debidamente.  Queda expresamente prohibido formular solicitudes publicando datos personales o de contacto, ni medios de pago distintos a los autorizados por "Reserly".  Cualquier solicitud  de servicio de un “Usuario” Consumidor que se publique en este sitio deberá limitarse a los servicios expresamente publicados por los “Usuarios” Proveedores que también usen el presente sitio.
            </Text>
          </Box>
        
          <Box>
            <Text fontWeight='bold' mb={3} fontSize='xl'>Ofrecimientos de Proveedores.</Text>
            <Text color='subtext' lineHeight='26px'>
              Los “Usuarios” que sean Proveedores, al momento de usar este sitio, se comprometen a considerarse como proveedores para efectos de la Ley Federal de Protección al Consumidor, así como a cumplir con todas las obligaciones que dicha ley impone a los proveedores, incluyendo –de manera enunciativa y no limitativa- las relativas a publicidad, promociones, garantías, normas oficiales mexicanas, contratos de adhesión, facturación y demás que resulten legalmente aplicables; liberando a "Reserly", sus accionistas, representantes, agentes, dependientes, factores o mandatarios de cualquier responsabilidad resultante de los servicios que publiciten o presten.  Cada “Usuario” Proveedor podrá publicar uno o más ofrecimientos de servicios, detallando las características del mismo e informando directamente a "Reserly", a través del sitio, el precio que pretende por sus servicios, incluyendo en este precio las contribuciones que deban trasladarse o retenerse conforme a las leyes fiscales.  En el momento en que un “Usuario” Proveedor reciba una solicitud de servicio, deberá evaluarla y responderla negando o aceptando el servicio solicitado, o proponiendo nuevos términos, en un lapso menor a 12 horas.
            </Text>
          </Box>
        
          <Box>
            <Text fontWeight='bold' mb={3} fontSize='xl'>Prohibiciones.</Text>
            <Text color='subtext' lineHeight='26px'>
              Los “Usuarios” no deberán usar este sitio en ningún momento para compartir información de contacto de un proveedor con terceros; dar a conocer sus datos personales; insultar o agredir a otros “Usuarios” o a "Reserly"; infringir en todo o en parte lo estipulado en las presentes  “Condiciones”, ni ejecutar acción de ninguna índole, o uso de dispositivos o software, o cualquier otro medio, para interferir o ingresar a las bases de datos de "Reserly" o en la información almacenada en nuestros servidores; ni reproducir en todo ni en parte, los contenidos de las pantallas de este sitio, sus redes o archivos, puesto que son objeto de propiedad industrial o intelectual; en el entendido de que cualquier contravención a lo anterior será investigado por nosotros y, en su caso, su Cuenta, Solicitud u Ofrecimiento será cancelado del sitio, sin perjuicio de las demás responsabilidades civiles o penales que, en su caso, resulten conforme a las leyes aplicables.
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
            <Text fontWeight='bold' mb={3} fontSize='xl'>Sistema Reputacional.</Text>
            <Text color='subtext' lineHeight='26px'>
              Este sitio no se obliga a confirmar ni a cerciorarse de la identidad de los “Usuarios”.  Sin embargo, contamos con un sistema de reputación donde los “Usuarios” podrán calificar la calidad de los servicios prestados y formular comentarios aprobatorios o reprobatorios.  Las calificaciones y los comentarios antes mencionados serán exclusiva responsabilidad de los “Usuarios” que los suscriban, por lo que "Reserly" no será responsable de los mismos y no verificará la validez o veracidad de los mismos; pero se reservará el derecho de excluir del sitio a los “Usuarios” que sean objeto de comentarios negativos provenientes de fuentes distintas, así como de eliminar los comentarios que resulten violatorios de las presentes “Condiciones”.
            </Text>
          </Box>
        
          <Box>
            <Text fontWeight='bold' mb={3} fontSize='xl'>Enlaces.</Text>
            <Text color='subtext' lineHeight='26px'>
              Este sitio contiene enlaces a servidores de terceros, mismos que no son propiedad ni están bajo el dominio, control, posesión ni propiedad de "Reserly", por lo que no seremos responsables por los contenidos, acciones, materiales ni servicios prestados por tales servidores, amén de que tales enlaces no representan ni constituyen relación de sociedad, aprobación ni respaldo de "Reserly" a los contenidos de los servidores antes referidos.
            </Text>
          </Box>
        
          <Box>
            <Text fontWeight='bold' mb={3} fontSize='xl'>Indemnización, Ley Aplicable y Jurisdicción.</Text>
            <Text color='subtext' lineHeight='26px'>
              Los “Usuarios” son directamente y únicos responsables de las relaciones que entablen usando este sitio.  La responsabilidad de "Reserly" se limita a proporcionar este sitio para facilitar el encuentro entre “Usuarios”, pero en ningún momento presta ni prestará los servicios que en su caso pacten los “Usuarios”; con motivo de lo cual estos últimos se obligan a sacar en paz y a salvo a "Reserly", sus accionistas, directivos, empleados, factores, dependientes y mandatarios,  de cualquier demanda, reclamación judicial o arbitral o queja ante autoridad por las actividades realizadas en este sitio, o por el incumplimiento de las presentes “Condiciones” o de las condiciones en que legal o contractualmente deban prestarse los servicios que se contraten mediante este sitio.  Las presentes “Condiciones” serán interpretadas conforme a lo previsto en el Código Civil Federal y el Código de Comercio y, en caso de cualquier controversia, los “Usuarios” someterán sus diferencias ante los jueces y tribunales de Monterrey, Nuevo León, México, renunciando al fuero que pueda corresponderles en razón de sus domicilios actuales o futuros, o por cualquier otro motivo.
              Si tiene dudas contacte a ayuda@reserly.mx
              {/* Nuestro domicilio se ubica en DR. JOSE LUNA AYALA No. 120 Int. C3 SAN JERONIMO, CP.64640 MONTERREY, NUEVO LEON, MEXICO. */}
            </Text>
          </Box>
        
        </VStack>
      </Flex>
    </Wrapper>
  );
}

export default Terms;