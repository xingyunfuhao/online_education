import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'
import Login from '@/components/pages/Login'
import Register from '@/components/pages/Register'
import Frame from '@/components/common/Frame' 
import English from '@/components/pages/English'
Vue.use(Router)

export default new Router({
  routes: [
	{
	  	path: '/',
		redirect: { name: 'frame' },
	},
   {
    	path:'/login',
    	name:'login',
    	component:Login
    },{
    	path:'/register',
    	name:'register',
    	component:Register
    },{
    	path:'/frame',
    	name:'frame',
    	component:Frame,
    },{
        path:'/english',
        name:'english',
        component:English 
    }
    ]
})
