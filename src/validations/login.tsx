import * as Yup from 'yup';

export const LoginSchemaValidation = Yup.object().shape({
  email: Yup.string()
    .required('Debes indicar un correo electrónico.')
    .email('Debes indicar un correo electrónico.'),
  
    password: Yup.string().required('Contraseña obligatoria.'),
});