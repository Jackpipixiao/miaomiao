export default {
    path: '/movie',
    component: () => import('@/views/Movie'),
    children: [{
            path: 'city',
            // ()=>路由懒加载，访问的时候才加载，而不是进入页面全部加载
            component: () => import('@/components/City')
        },
        {
            path: 'nowplaying',
            component: ()=> import('@/components/NowPlaying')
        },
        {
            path: 'comingson',
            component: ()=>import('@/components/ComingSon')
        },
        {
            path: 'search',
            component: ()=>import('@/components/Search')
        },
        //目前的重定向是主页在router的index.js定向到movie，movie的路径为""定向到nowplaying路由
        {
            path:"",
            redirect:'/movie/nowplaying'
        }
    ]
}