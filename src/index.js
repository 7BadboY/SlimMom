import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './utils/serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import './stylesheet/main.css';
import { I18nextProvider, translate } from 'react-i18next';
import i18n from './utils/i18n';

const store = configureStore();

const render = Component => {
  return ReactDOM.render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </I18nextProvider>
    </Provider>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}

serviceWorker.unregister();
