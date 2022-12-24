
import axios from 'axios';
import store from '../store';

async function auth({ next, VueRouter }) {
  const access_token = (store.state.access_token)
  console.log(access_token)

  if (!access_token) {
    return VueRouter.push({ name: 'Register' });
  }

  if (access_token) {
    try {
      let result = await axios.post(process.env.TOKEN_VALIDATE_ENDPOINT, {}, {
        headers: { 'Authorization': 'Bearer ' + access_token }
      })

      if (result.data.validated === true) {
        return next()
      }
    } catch (error) {
      localStorage.clear();
      return VueRouter.push({ name: 'Home' });
    }
  }
}

export default auth;
