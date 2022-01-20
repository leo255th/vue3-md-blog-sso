import store from 'store2'
import router from '.';

router.beforeEach(async (to,from,next)=>{
  console.log('from:',from)
  const session_token:string=store.get('session_token');
  if(session_token){
    console.log('路由守卫:',session_token)
  }
  next();
})