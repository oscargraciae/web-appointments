import * as Yup from 'yup';

export const changePasswordSchemaValidation = Yup.object().shape({
  password: Yup.string()
    .required('Debes indicar una contraseña.'),

  confirmPassword: Yup.string()
    .required('Debes confirmar la contraseña.')
});