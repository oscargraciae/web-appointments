import * as Yup from 'yup';

export const forgotSchemaValidation = Yup.object().shape({
  email: Yup.string()
    .required('Debes indicar un correo electrónico.')
    .email('Debes indicar un correo electrónico.'),
});