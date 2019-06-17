import HomePage from './components/HomePage.vue';
import BuildRobot from './components/BuildRobot.vue';


export  const routes=[
    {
        path:'/',
        component:HomePage
    },
    {
        path:'/buildrobot',
        component:BuildRobot
    },
    { 
        path: '*',
        redirect: '/'
     }


];