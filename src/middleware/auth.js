
import axios from 'axios';
import store from '../store';

async function auth({ next, VueRouter }) {
  const access_token = store.state.access_token

  if (!access_token) {
    return VueRouter.push({ name: 'Register' })
  }

  try {
    let result = await axios.post(process.env.TOKEN_VALIDATE_ENDPOINT, {}, {
      headers: { 'Authorization': 'Bearer ' + access_token }
    })

    if (result.data.validated === true) {
      return next()
    }
  } catch (error) {
    store.dispatch('logout')
    return VueRouter.push({ name: 'Register' })
  }
}

export default auth;
