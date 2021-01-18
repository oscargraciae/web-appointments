import * as Yup from 'yup';

export const LoginSchemaValidation = Yup.object().shape({
  email: Yup.string().required('Ingresa un nombre'),
  password: Yup.string().required('Ingresa un nombre'),
});