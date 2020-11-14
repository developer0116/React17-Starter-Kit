import { TOKEN_KEY } from 'constants/globalConstants';
import React from 'react';
import { useDispatch } from 'react-redux';
import AppRoutes from 'routes';
import { appStored } from 'services';
import { verifyTokenAction } from 'store/actions/auth.action';

interface IAppProps {}

const App: React.FC<IAppProps> = () => {
  const dispatch = useDispatch();
  const token = appStored.getItem<string | null>(TOKEN_KEY);
  React.useEffect(() => {
    if (token) {
      dispatch(verifyTokenAction(token));
    }
  }, [token, dispatch]);
  return (
    <React.Fragment>
      <AppRoutes />
    </React.Fragment>
  );
};

export default App;
