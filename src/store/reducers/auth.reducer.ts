import { AUTH_SUCCESS } from 'store/action-types/auth';

const initialState = {};
const authReducer = (state = initialState, action: ActionRedux) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default authReducer;
