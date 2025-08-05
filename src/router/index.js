import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Active from '@/views/Active.vue'
import Complete from '@/views/Complete.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
		{
			path: '/active',
			name: 'Active',
			component: Active,
		},
		{
			path: '/complete',
			name: 'Complete',
			component: Complete,
		},
	],
})

export default router
