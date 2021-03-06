import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import store from './store';

export default () => axios.create({
  baseURL: store.state.baseUrl,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${store.state.authentication.token}`,
  },
});
