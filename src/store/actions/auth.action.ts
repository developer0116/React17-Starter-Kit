import { VERIFY_TOKEN } from 'store/action-types/auth';

export const verifyTokenAction = (token: string): ActionRedux => ({
  type: VERIFY_TOKEN,
  payload: token,
});
