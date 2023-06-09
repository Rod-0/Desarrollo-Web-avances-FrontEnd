import Home from '../src/components/Home.vue'
import FormData from "@/components/form-data.vue";
import ListComponent from "@/components/list-component.vue";
import NotFound from "@/components/NotFound.vue";
import {createRouter,createWebHashHistory}    from 'vue-router'
import UserCreateForm from  "@/components/user-create-form.vue";
import UserEditForm from "@/components/user-edit-form.vue";
import ListUser from "@/components/user-list.vue";
import Post from "@/components/posts.vue";
import createPost from "@/components/createPost-component.vue";


const routes = [
    {path:'/',component:Home },
    {path:'/AddTutorial/:id',component:FormData },
    {path:'/User',component:UserCreateForm },
    {path:'/User/:id',component:UserEditForm,name:'user', },
    {path:'/ListComponent',component:ListComponent },
    {path:'/ListUser',component:ListUser },
    {path:'/Posts',component:Post },
    {path:'/CreatePosts',component:createPost },
    {path:'/:cathAll(.*)',component:NotFound}
    

]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default  router;