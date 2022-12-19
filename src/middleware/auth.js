
import axios from 'axios';
import store from '../store';

async function auth({ next, VueRouter }) {
    const access_token = (store.state.token)

    if(!access_token) {
        return VueRouter.push({ name: 'Register' });
    }

    if(access_token){
        try {
            let result = await axios.post('https://api.cookbookshq.com/api/v1/auth/validate', {}, {
        headers: { 'Authorization': 'Bearer ' + access_token }      
        
    })
    console.log('successful')
    if(result.data.validated === true){
        return next()
    }
        } catch (error) { 
            localStorage.clear();
            return VueRouter.push({ name: 'Home' });
        }
}
   
    


}

export default auth;


