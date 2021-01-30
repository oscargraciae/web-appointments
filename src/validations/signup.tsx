import * as Yup from 'yup';

export const SignupSchemaValidation = Yup.object().shape({
  email: Yup.string()
    .required('Debes indicar un correo electrónico.')
    .email('Debes indicar un correo electrónico.'),
  
  password: Yup.string().required('Contraseña obligatoria.'),

  firstName: Yup.string().required('Nombre obligatorio.'),
  lastName: Yup.string().required('Apellido obligatorio.'),
  phone: Yup.string().required('Número de telefono obligatorio.'),
});