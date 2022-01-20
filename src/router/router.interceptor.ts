import store from 'store2'
import router from '.';

router.beforeEach(async (to,from,next)=>{
  console.log('to:',to)
  if(to.path=='/'){
    const session_token:string=store.get('session_token');
    if(session_token){
      // 如果有session_token
      next()
    }else{
      next({
        path:'/login',
        replace:true,
        query:{...to.query}
      })
    }
  }else{
    next()
  }

})