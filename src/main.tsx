
import ReactDOM from 'react-dom'; // react-dom/client yerine react-dom kullanın
import App from './App.jsx'; // .jsx uzantısını kullanın
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
