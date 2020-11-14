import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { ILoginRequest } from 'models/auth.model';
import {
  AuthPageWrapper,
  FormAuthWrapper,
  FromAuthFooterWrapper,
} from 'containers/auth/form-auth.styled';

import inputStyle from 'styles/util-modules/input.module.scss';
import buttonStyle from 'styles/util-modules/button.module.scss';
import { useTranslation } from 'react-i18next';
import { REGISTER } from 'constants/paths';
import { Link } from 'react-router-dom';

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = () => {
  const [t] = useTranslation();
  const initialValues: ILoginRequest = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().required(),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    validate: (e) => {
      console.log(e);
    },
    onSubmit: (values, action) => {
      console.log(values, action);
    },
  });
  return (
    <AuthPageWrapper>
      <FormAuthWrapper>
        <h1>{t('auth.login.title')}</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className={inputStyle.form_group}>
            <label htmlFor="email">Email</label>
            <input
              className={inputStyle.form_control}
              id="email"
              name="email"
              placeholder="email"
              autoComplete="off"
            />
          </div>
          <div className={inputStyle.form_group}>
            <label htmlFor="password">Password</label>
            <input
              className={inputStyle.form_control}
              id="password"
              name="password"
              placeholder="password"
              autoComplete="off"
              type="password"
            />
          </div>
          <FromAuthFooterWrapper>
            <div>
              <Link to={REGISTER}>Register</Link>
            </div>
            <button className={buttonStyle.btn_primary} type="submit">
              Login
            </button>
          </FromAuthFooterWrapper>
        </form>
      </FormAuthWrapper>
    </AuthPageWrapper>
  );
};
export default Login;
