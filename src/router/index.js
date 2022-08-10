// import vue router
import { createRouter, createWebHistory } from 'vue-router'

// define routes
const routes = [
	{
		path: '/',
		name: 'post.index',
		component: () => import(/* webpackChunkName: "post.index" */ '@/views/post/Index-view.vue')
	},

	{
		path: '/create',
		name: 'post.create',
		component: () => import(/* webpackChunkName: "post.create" */ '@/views/post/Create-view.vue')
	},

	{
		path: '/edit/:id',
		name: 'post.edit',
		component: () => import(/* webpackChunkName: "post.edit" */ '@/views/post/Edit-view.vue')
	}
]

// create router
const router = createRouter({
	history: createWebHistory(),
	routes //config routes
})

export default router