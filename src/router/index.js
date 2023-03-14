import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import BlogView from '../views/BlogView.vue';
import ContactView from '../views/ContactView.vue';
import ProjectView from '../views/ProjectView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/about',
			name: 'about',
			component: AboutView,
		},
		{
			path: '/blog',
			name: 'blog',
			component: BlogView,
		},
		{
			path: '/contact',
			name: 'contact',
			component: ContactView,
		},
		{
			path: '/project/:id',
			name: 'project',
			component: ProjectView,
		},
	],
});

export default router;
