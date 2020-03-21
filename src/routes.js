import { Blog, About, Work, Home, BlogDetail } from 'pages'

export const routes = [
	{
		name: 'Home',
		url: '/',
		component: Home,
	},
	{
		name: 'Portfolio',
		url: '/work',
		component: Work,
	},
	{
		name: 'Blog',
		url: '/blog',
		component: Blog,
	},
	{
		name: 'About',
		url: '/about',
		component: About,
	},
	{
		name: 'Blog',
		url: '/blog/:slug',
		component: BlogDetail,
	},
]
