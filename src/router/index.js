import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

/**
 * 防止点击一次 NavigationDuplicated 出错
 * @param location
 * @returns {Promise<Route>}
 */
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location){
    return originalPush.call(this,location).catch(err=>err);
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function repalce(location, onResolve, onReject) {
    if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
    return originalReplace.call(this, location).catch(err => err)
}

const Find = ()=>import('../views/findings/Find');
const Play = ()=>import('../views/palyer/Play');
const Profile = ()=>import('../views/profile/Profile');
const Song = ()=>import('../views/singsongs/Song')
const Yuncun = ()=>import('../views/yuncun/Yuncun');

const routes = [
    {
        path:'',
        redirect:'/find'
    },
    {
        path:'/find',
        component:Find
    },
    {
        path: '/play',
        component:Play
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/song',
        component:Song
    },
    {
        path:'/Yuncun',
        component:Yuncun
    }
]

/**
 * 配置路由
 * @type {VueRouter}
 */
const router = new VueRouter({
    routes,
    mode:'history'
})

export default router
