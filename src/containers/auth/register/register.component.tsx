import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { IRegisterRequest } from 'models/auth.model';
import {
  AuthPageWrapper,
  FormAuthWrapper,
  FromAuthFooterWrapper,
} from 'containers/auth/form-auth.styled';

import inputStyle from 'styles/util-modules/input.module.scss';
import buttonStyle from 'styles/util-modules/button.module.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LOGIN } from 'constants/paths';

interface IRegisterProps {}

const Register: React.FunctionComponent<IRegisterProps> = () => {
  const [t] = useTranslation();
  const initialValues: IRegisterRequest = {
    email: '',
    password: '',
    confirmPassword: '',
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
        <h1>{t('auth.register.title')}</h1>
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
          <div className={inputStyle.form_group}>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              className={inputStyle.form_control}
              id="confirm-password"
              name="confirmPassword"
              placeholder="confirm password"
              autoComplete="off"
              type="password"
            />
          </div>
          <FromAuthFooterWrapper>
            <div>
              <Link to={LOGIN}>Login</Link>
            </div>
            <button className={buttonStyle.btn_primary} type="submit">
              Register
            </button>
          </FromAuthFooterWrapper>
        </form>
      </FormAuthWrapper>
    </AuthPageWrapper>
  );
};
export default Register;
