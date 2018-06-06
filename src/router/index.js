import asyncComponent from '../common/AsyncComponent';

export const Home = asyncComponent(()=>import('../pages/home/index'));

export const Admin = asyncComponent(()=>import('../pages/admin/index'));
export const AdminUsers = asyncComponent(()=>import('../pages/admin/UserManage'));
export const AdminArticles = asyncComponent(()=>import('../pages/admin/ArticleManage'));
export const AdminLogin = asyncComponent(()=>import('../pages/admin/AdminLogin'));

export const Article = asyncComponent(()=>import('../pages/article/index'));
export const ArticlePublish = asyncComponent(()=>import('../pages/article/publishArticle'));
export const ArticleDetail = asyncComponent(()=>import('../pages/article/articleDetail'));

export const NotFound = asyncComponent(()=>import('../common/NotFound'));


// const routes = [
//     {
//         path:'/',
//         exact:true,
//         component:asyncComponent(()=>import('../pages/home/index'))
//     },
//     {
//         path:"/admin",
//         component:asyncComponent(()=>import('../pages/admin/index')),
//         routes:[
//             {
//                 path:"/admin/users",
//                 exact:true,
//                 component:asyncComponent(()=>import('../pages/admin/UserManage'))
//             },
//             {
//                 path:"/admin/articles",
//                 exact:true,
//                 component:asyncComponent(()=>import('../pages/admin/ArticleManage'))
//             }
//         ]
//     },
//     {
//         path:"/article/:id",
//         component:asyncComponent(()=>import('../pages/article/index'))
//     },
//     {
//         path:'*',
//         component:asyncComponent(()=>import('../common/NotFound'))
//     }
// ]
// export default routes;