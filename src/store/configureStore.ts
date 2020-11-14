import { applyMiddleware, compose, createStore, Store } from 'redux';
import { rootReducer } from './reducers';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}): Store {
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          shouldHotReload: false,
          name: 'dl',
        })
      : compose;
  /* eslint-enable */

  const store = createStore(rootReducer, initialState, composeEnhancers(...enhancers));
  sagaMiddleware.run(rootSaga);

  return store;
}
