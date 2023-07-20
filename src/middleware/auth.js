import axios from "axios";
import store from "../store";

async function auth({ to, from, next, VueRouter }) {
  const access_token = store.state.access_token;

  if (!access_token) {
    store.commit("save_attempted_route", to.fullPath);
    return VueRouter.push({ name: "Register" });
  }

  try {
    let result = await axios.post(
      process.env.TOKEN_VALIDATE_ENDPOINT,
      {},
      {headers: { Authorization: "Bearer " + access_token },}
    );

    if (result.data.validated === true) {
      next();
    } else {
      store.commit("save_attempted_route", to.fullPath);
      store.dispatch("logout");
      VueRouter.push({ name: "Register" });
    }
  } catch (error) {
    store.commit("save_attempted_route", to.fullPath);
    store.dispatch("logout");
    VueRouter.push({ name: "Register" });
  }
}

export default auth;
